import React, { useState, useEffect } from "react";
import { useValidation, yupResolver } from "../../validations/validations";
import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom";


import {
    Adminka,
    AdminApp,
    AdminBigDiv,
    AdminChanges,
    AdminsInput,
    AdminsBtn,
    AdminDiv,
    DeletBtn,
    PutBtn,
    AdminChangeInner,
    AdminImagesChange,
    AdminPopIt,
    PopIt,
    PopButtons,
    AdminDivForInput,
    AdminInput,
    PopImages,
    BgcDiv,
    PutChange,


} from "./styled";
import { Link } from "react-router-dom";

export const AdminPage = () => {
    const [value, setValue] = useState({});
    const [value2, setValue2] = useState({});
    const [type, setType] = useState("phone");
    const [type2, setType2] = useState("phone");
    const [model, setModel] = useState("apple");
    const [model2, setModel2] = useState("apple");
    const [file, setFile] = useState(null);
    const [file2, setFile2] = useState(null);
    const [prod, setProd] = useState()
    const [change, setChange] = useState(false)
    const [pop, setPop] = useState(false)
    const [editProductIndex, setEditProductIndex] = useState(null);
    const [login, setLogin] = useState(false);

    const loc = useNavigate()
    const {
        register,
        handleSubmit,
    } = useForm()
    React.useEffect(() => {
        const getData = async () => {
            try {
                const req = await fetch(`http://localhost:3001/profile?token=${localStorage.getItem("token")}`)
                const res = await req.json()
                console.log(res);
                if (res.user.email == "vaxarshak.avetisyan.00@gmail.com")
                    setLogin(true)

            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])


    const changeValue = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFile(files[0]);
        } else {
            setValue(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const changeValuePut = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFile2(files[0]);
        } else {
            setValue2(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    console.log(value2);
    const myF = async () => {
        console.log(value);
        value.type = type
        value.model = model
        try {
            const formData = new FormData();
            for (const key in value) {
                formData.append(key, value[key]);
            }
            if (file) {
                formData.append('file', file);
            }

            const req = await fetch("http://localhost:3001/add-product", {
                method: "POST",
                body: formData
            });

            if (req.ok) {
                console.log("Product added successfully!");
                setChange(e => !e)
            } else {
                console.log("Failed to add product.");
            }
        } catch (error) {
            console.log(error);
        }
    };
    const myDel = async (i) => {
        console.log(prod[0]._id);
        try {
            const req = await fetch("http://localhost:3001/delete-product?token=" + localStorage.getItem("token"), {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id: prod[i]._id })
            })

            const res = await req.json()
            console.log(res);
            setChange(e => !e)


        } catch (error) {

        }
    }


    useEffect(() => {
        const myF1 = async () => {
            const req = await fetch("http://localhost:3001/get-product")
            const res = await req.json()
            setProd(res)
        }
        myF1()
    }, [change])

    const changeType = (data) => {
        console.log(data);

        setType(data)
    }
    const changeModel = (data) => {
        setModel(data)
    }
    const changeType2 = (data) => {
        console.log(data);

        setType2(data)
    }
    const changeModel2 = (data) => {
        setModel2(data)
    }
    const toggleEditProduct = (index) => {
        setEditProductIndex((e) => (e === index ? null : index));
    };


    const myF2 = async (id) => {
        console.log(value2);
        value2.type = type2
        value2.model = model2

        try {
            const formData = new FormData();
            for (const key in value2) {
                formData.append(key, value2[key]);
            }
            if (file2) {
                formData.append('file', file2);
            }
            formData.append("id", prod[id]._id)

            const req = await fetch("http://localhost:3001/put-product", {
                method: "PUT",
                body: formData
            });

            if (req.ok) {
                console.log("Product added successfully!");
                setChange(e => !e)
            } else {
                console.log("Failed to add product.");
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <Adminka>



            {login ?
                <>
                    {pop && <BgcDiv onClick={() => setPop(false)} />}
                    {pop &&


                        <AdminPopIt>
                            <AdminDivForInput>
                                <AdminInput placeholder="serach" />
                            </AdminDivForInput>
                            {prod?.map((e, i) => {
                                return (
                                    <PopIt>
                                        name : {e.name}<br />
                                        price : {e.price}<br />
                                        ram : {e.ram}<br />
                                        card : {e.card}<br />
                                        cash : {e.cash}<br />
                                        12 month : {e.month12}<br />
                                        24 month : {e.month24}<br />
                                        36 month : {e.month36}<br />
                                        <img src={`http://localhost:3001/uploads/${e.img}`} />
                                        <PopButtons>
                                            <DeletBtn onClick={() => myDel(i)}>Delete</DeletBtn>
                                            <PutBtn onClick={() => toggleEditProduct(i)}>Put</PutBtn>

                                        </PopButtons>
                                        {editProductIndex === i &&
                                            <PutChange>

                                                <AdminBigDiv>
                                                    <AdminDiv>
                                                        <AdminsInput placeholder="name" name="name" onChange={changeValuePut} />
                                                        <AdminsInput placeholder="price" name="price" onChange={changeValuePut} />
                                                        <AdminsInput placeholder="ram" name="ram" onChange={changeValuePut} />
                                                        <AdminsInput placeholder="cash" name="cash" onChange={changeValuePut} />
                                                        <AdminsInput placeholder="card" name="card" onChange={changeValuePut} />
                                                        <AdminsInput placeholder="memory" name="memory" onChange={changeValuePut} />
                                                        <AdminsInput placeholder="brand" name="brand" onChange={changeValuePut} />
                                                        <AdminsInput placeholder="year" name="year" onChange={changeValuePut} />
                                                        <AdminsInput placeholder="battery" name="battery" onChange={changeValuePut} />
                                                        <AdminsInput placeholder="CHIPSET" name="chipset" onChange={changeValuePut} />
                                                        <input type="file" name="file" onChange={changeValuePut} />
                                                        <select onChange={(e) => changeType2(e.target.value)}>
                                                            <option value="phone">phone</option>
                                                            <option value="acsessories">acsessories</option>
                                                            <option value="others">others</option>
                                                        </select>
                                                        <select onChange={(e) => changeModel2(e.target.value)}>
                                                            <option value="apple">apple</option>
                                                            <option value="samsung">samsung</option>
                                                            <option value="xiaomi">xiaomi</option>
                                                        </select>

                                                        <AdminsBtn onClick={() => myF2(i)}>ADD</AdminsBtn>
                                                        <Link to="/"><button>Home page</button></Link>
                                                    </AdminDiv>

                                                </AdminBigDiv>
                                            </PutChange>
                                        }
                                    </PopIt>
                                )
                            })}

                            <PopImages>

                            </PopImages>
                        </AdminPopIt>}
                    <AdminApp>


                        <AdminBigDiv>
                            <AdminDiv>
                                <AdminsInput placeholder="name" name="name" onChange={changeValue} />
                                <AdminsInput placeholder="price" name="price" onChange={changeValue} />
                                <AdminsInput placeholder="ram" name="ram" onChange={changeValue} />
                                <AdminsInput placeholder="cash" name="cash" onChange={changeValue} />
                                <AdminsInput placeholder="card" name="card" onChange={changeValue} />
                                <AdminsInput placeholder="memory" name="memory" onChange={changeValue} />
                                <AdminsInput placeholder="color" name="color" onChange={changeValue} />
                                <AdminsInput placeholder="brand" name="brand" onChange={changeValue} />
                                <AdminsInput placeholder="year" name="year" onChange={changeValue} />
                                <AdminsInput placeholder="battery" name="battery" onChange={changeValue} />
                                <input type="file" name="file" onChange={changeValue} />
                                <select onChange={(e) => changeType(e.target.value)}>
                                    <option value="phone">phone</option>
                                    <option value="acsessories">acsessories</option>
                                    <option value="others">others</option>
                                </select>
                                <select onChange={(e) => changeModel(e.target.value)}>
                                    <option value="apple">apple</option>
                                    <option value="samsung">samsung</option>
                                    <option value="xiaomi">xiaomi</option>
                                </select>

                                <AdminsBtn onClick={myF}>ADD</AdminsBtn>
                                <Link to="/"><button>Home page</button></Link>
                            </AdminDiv>

                        </AdminBigDiv>
                        <AdminChanges>

                            <AdminChangeInner>
                                <AdminImagesChange >
                                    <button onClick={() => setPop(true)}>open list</button>
                                </AdminImagesChange>
                            </AdminChangeInner>
                        </AdminChanges>
                    </AdminApp>
                </> :

                <h1 style={{ paddingTop: "150px" }}>Вы не админ</h1>}

        </Adminka>
    );
};
