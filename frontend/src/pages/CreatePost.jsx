import React, { useState } from "react";
import api from "../api/api";

function CreatePost() {
  const [form, setForm] = useState({ title: "", content: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const createPost = async(e) => {
    try {
      e.preventDefault(); //try k upr bhi ho skta h
      const res = await api.post("/posts", form);
      alert(res.data.message);
      setForm({title:"",content:""});
    }
    catch (err) {
      alert(err.response?.data?.message || "Post create Failed");
      console.log("POST CREATE ERROR", err);
    }
  };
  return (<div className="p-6">
    <form className="bg-white p-5 rounded-xl shadow max-w-lg"
    onSubmit={createPost}>
        <input type="text" name="title" placeholder="Enter title" value={form.title} onChange={handleChange} className="w-full border p-2 mb-3 rounded "/>
         <textarea name="content" value={form.content} onChange={handleChange} className="w-full border p-2 mb-3 rounded "></textarea>
         <button className="w-full bg-black text-white py-2 rounded">Create Post</button>
    </form>
  </div>
  );
}


export default CreatePost;
