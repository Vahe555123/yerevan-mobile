const PORT = 3001
const mongoose = require('mongoose');
// const url = "mongodb+srv://vaheshmavonyan34:vahe2002@cluster0.io9yjdg.mongodb.net/";
const url = "mongodb://localhost:27017/Vaxo1"
const jwt = require('jsonwebtoken');
const { Post, PhoneModel, AdminModel } = require('./models/post');
const { verifyToken } = require('./middleware/auth');
const cors = require('cors');
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const fs = require("fs")
const crypto = require('crypto');

const bodyParser = require('body-parser');
const nodemeiler = require('nodemailer');
app.use(bodyParser.json());
const bcrypt = require('bcrypt');

app.use(cors())
const path = require("path")
mongoose.connect(url,);
const db = mongoose.connection;
db.on('error', () => { console.log('MongoDB connection error') });
db.once('open', () => { console.log('connected to MongoDB'); });
app.use(fileUpload());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const uploadsPath = './uploads';
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath);
}
const transporter = nodemeiler.createTransport({
  host: "smtp.gmail.email",
  secure: false,
  service: "gmail",
  auth: {
    user: "vaxarshak.avetisyan.00@gmail.com",
    pass: "cuzq kyde quot mgay"
  }
})

const generateConfirmationToken = (userID) => {
  return jwt.sign({ userID: userID }, "your-secret-key", { expiresIn: "1m" })
};

app.post('/register', async (req, res) => {
  try {
    const { email, password, name, lastName } = req.body;
    if (!email || !password || !name || !lastName) {
      return res.status(400).json({ error: "require failed" })
    }
    const users = await Post.find({});
    const existingerUser = users.find(e => e.email === email);
    if (existingerUser) {
      return res.status(400).json({ error: "email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Post({
      email, password: hashedPassword, name, lastName, basket: []
    })
    await newUser.save();

    const confirmationToken = generateConfirmationToken(newUser._id);
    const mailOptions = {
      from: "vaxarshak.avetisyaN.00@gmail.com",
      to: email,
      subject: "Registration Confirmation",
      html: ` Hello \n \n Thank you for registering! \n <a href="http://localhost:3001/confirm?token=${confirmationToken}">click to confirm your account</a>`
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
      }
    }); res.send({ token: confirmationToken })
  } catch (error) {
    console.log(error);
  }
})



app.post("/admin-register", async (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name || !password) {
      return res.status(400).json({ error: "Missing email or password" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new AdminModel({ name, password: hashedPassword })
    await admin.save()
    res.status(200).json(admin)
  } catch (error) {
    console.log(error);
  }
})


app.get('/confirm', async (req, res) => {
  try {
    const { token } = req.query;
    if (!token) {
      return res.status(400).json({ error: "Missing confirmation token" });
    }
    const decodedToken = jwt.verify(token, 'your-secret-key');
    console.log(decodedToken);
    const user = await Post.findById(decodedToken.userID);
    if (user) {
      user.confirmed = true;
      await user.save();
    }
    res.redirect(`http://localhost:3000`);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.get('/profile', verifyToken, async (req, res) => {
  try {

    const user = await Post.findById(req.userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const token = req.query.token || req.headers['x-access-token'];
    res.json({
      token: token,
      user: user
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const { password } = req.body;
    const email = req.body.name

    if (!email || !password) {
      return res.status(400).json({ error: "Missing email or password" });
    }
    const user = await Post.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "invalid email or password" })
    }
    if (!user.confirmed) {
      return res.status(402).json({ error: "no confirmed email" })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid or password" })
    }
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h"
    });
    user.login = true
    user.save()
    res.status(200).redirect(`/profile?token=${token}`)

  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" })
  }
})

app.post("/admin-login", async (req, res) => {
  try {
    console.log(req.body);
    const { name, password } = req.body;
    if (!name || !password) {
      return res.status(404).json({ error: "error to login" })
    }
    const admin = await AdminModel.findOne({ name: name })
    if (!admin) {
      return res.status(404).json({ error: "user or password invailed" })
    }
    const isPasswordValid = await bcrypt.compare(password, admin.password)

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid or password" })
    }
    res.status(200).json({ mes: "success" })
  } catch (error) {

  }
})


app.post("/add-product", async (req, res) => {
  console.log(req.files);
  const fileData = req.files ? req.files.file : null;
  if (fileData) {
    const imgFileName = `${Date.now()}_${fileData.name}`;
    fileData.mv(`${uploadsPath}/${imgFileName}`, async (err) => {
      if (err) {
        console.error('Error saving file:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      const newProduct = new PhoneModel({
        ...req.body,
        img: imgFileName,
      });

      await newProduct.save();

      res.status(200).json({ message: 'Product added successfully' });
    });
  }

})

app.put("/put-product", async (req, res) => {
  console.log(req.files);
  console.log(req.body);
  const fileData = req.files ? req.files.file : null;
  if (fileData) {
    const imgFileName = `${Date.now()}_${fileData.name}`;
    fileData.mv(`${uploadsPath}/${imgFileName}`, async (err) => {
      if (err) {
        console.error('Error saving file:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      const user = await PhoneModel.findById(req.body.id)
      let imgDel = user.img
      const previousImgPath = `./uploads/${imgDel}`;

      fs.access(previousImgPath, fs.constants.F_OK, (err) => {
        if (err) {
          console.error('Файл не найден');
        } else {
          console.log('Файл найден');
          fs.unlinkSync(previousImgPath);
        }
      });
      const putProduct = await PhoneModel.findByIdAndUpdate(req.body.id, { ...req.body, img: imgFileName })

      await putProduct.save();

      res.status(200).json({ message: 'Product added successfully' });
    });
  }

})

app.get("/get-product", async (req, res) => {
  try {
    const product = await PhoneModel.find()
    if (!product) {
      return res.status(400).send("err")
    }
    res.status(200).json(product)
  } catch (error) {
    console.log(error);
  }
})



app.delete("/delete-product", verifyToken, async (req, res) => {
  const itemId = req.body.id;
  console.log(itemId);

  const result = await PhoneModel.findByIdAndDelete(itemId)
  if (result) {
    let imgDel = result.img
    const previousImgPath = `./uploads/${imgDel}`;
    fs.access(previousImgPath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error('Файл не найден');
      } else {
        console.log('Файл найден');
        fs.unlinkSync(previousImgPath);
      }
    });
    if (result) {

      await Post.findByIdAndUpdate(
        req.userId,
        { $pull: { basket: { _id: new ObjectId(result._id) } } }, // Удаление элемента по его _id
        { new: true } // Возвращает обновленный документ
      );
      await Post.findByIdAndUpdate(
        req.userId,
        { $pull: { wishList: { _id: new ObjectId(result._id) } } }, // Удаление элемента по его _id
        { new: true } // Возвращает обновленный документ
      );
      res.status(200).send({ success: "success" })
    } else {
      res.status(404).send({ error: "error" })

    }
  }

})
app.get("/get-products-page", async (req, res) => {
  if (!req.query.id) {
    return res.status(404).send({ err: "nor found" })
  }
  if (req.query.id.length < 5) {
    return res.status(404).send({ err: "nor found" })
  }
  const prod = await PhoneModel.findById(req.query.id)
  if (prod) {
    res.status(200).json(prod)
  } else {
    res.status(404).send({ err: "err" })
  }
})



app.get("/get-product/model", async (req, res) => {
  try {
    const type = req.query.type
    console.log(type);
    let product;
    if(type != "all"){
      product = await PhoneModel.find({ model: type })
    }else{
      product = await PhoneModel.find()
    }
    console.log(product);
    if (!product) {
      return res.status(400).send("err")
    }
    res.status(200).json(product)
  } catch (error) {
    console.log(error);
  }
})
app.get("/add-wish", verifyToken, async (req, res) => {
  try {
    const user = await Post.findById(req.userId);
    if (!user) {
      return res.status(404).json({ "message": "user not found" });
    }

    const product = await PhoneModel.findById(req.query.id);
    if (!product) {
      return res.status(404).json({ "message": "product not found" });
    }

    const likeIndex = product.likes.indexOf(req.userId);
    if (likeIndex !== -1) {
      product.likes.splice(likeIndex, 1);
    } else {
      product.likes.push(req.userId);
    }
    await product.save();

    const favoriteIndex = user.wishList.findIndex(e => String(e._id) === String(product._id));
    if (favoriteIndex !== -1) {
      user.wishList.splice(favoriteIndex, 1);
      await user.save();
      return res.status(200).json({ "message": "лайк успешно отменен" });
    }

    user.wishList.push(product);
    await user.save();
    res.status(200).json({ "message": "success" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ "message": "Internal server error" });
  }
});


app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Post.findOne({ email });
    if (!user) {
      return res.status(400).send('Пользователь с таким email не найден');
    }

    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();


    const mailOptions = {
      to: user.email,
      from: 'vaxarshak.avetisyaN.00@gmail.com',
      subject: 'Сброс пароля',
      text: `Вы получили это письмо, потому что вы (или кто-то другой) запросили сброс пароля для вашей учетной записи.\n\n
        Пожалуйста, перейдите по следующей ссылке или вставьте ее в браузер, чтобы завершить процесс:\n\n
        http://localhost:3000/reset-password/${token}\n\n
        Если вы не запрашивали это, пожалуйста, проигнорируйте это письмо, и ваш пароль останется прежним.\n`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Ссылка для сброса пароля отправлена на вашу почту.');
  } catch (error) {
    res.status(500).send('Ошибка сервера.');
  }
});

app.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await Post.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).send('Токен сброса пароля недействителен или истек.');
    }

    user.password = await bcrypt.hash(password, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).send('Пароль успешно сброшен.');
  } catch (error) {
    res.status(500).send('Ошибка сервера.');
  }
});





app.post('/search', async (req, res) => {
  const searchTerm = req.body.searchTerm.toLowerCase();
  console.log(searchTerm);

  try {
    const products = await PhoneModel.find({
      name: { $regex: searchTerm, $options: 'i' }
    });
    // const products = await PhoneModel.find();
    // let result = products.filter((e) => {
    //   return e.name.toLocaleLowerCase().includes(searchTerm)
    // })
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/add-basket", verifyToken, async (req, res) => {
  try {
    const user = await Post.findById(req.userId);
    console.log(1);
    if (!user) {
      return res.status(404).json({ "message": "user not found" });
    }

    const product = await PhoneModel.findById(req.query.id);
    console.log(2);
    if (!product) {
      return res.status(404).json({ "message": "product not found" });
    }
    console.log(product._id);
    let result = user.basket.filter(e => e._id.toString() == product._id.toString())
    console.log(result);
    if (result.length > 0) {
      return res.status(403).json({ "message": "продукт уже есть" });
    }

    user.basket.push(product);
    await user.save();

    return res.status(200).json({ "message": "лайк успешно отменен" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ "message": "Internal server error" });
  }
});


// app.get("/get-wishList" , verifyToken , async (req , res) => {
//   const user = await Post.findById(req.userId)
//   if(!user){
//     return res.status(404).json({ "message": "user not found" });
//   }
//   res.json(user.wishList)
// })



const ObjectId = mongoose.Types.ObjectId
app.delete("/delete-basket", verifyToken, async (req, res) => {
  const user = await Post.findByIdAndUpdate(
    req.userId,
    { $pull: { basket: { _id: new ObjectId(req.query.id) } } }, // Удаление элемента по его _id
    { new: true } // Возвращает обновленный документ
  );
  res.status(200).json(user)
})
app.listen(3001)