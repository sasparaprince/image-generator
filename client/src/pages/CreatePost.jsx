import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    promps: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};

  const handleChange = (e) => {};
  const  handleSurpriseMe = () => {};
  return (
    <section className="max-w-7x1 mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community Showcase
        </h1>
        <p>
          Create imaginative and visually stunning images through by DALL_E AI
          and share them with the community
        </p>
      </div>

      <form className="mt-16 max-w-3x1" onSubmit={handleSubmit}>
        <FormField
          LabelName="Your name"
          type="text"
          name='name'
          placeholder="prince saspra"
          value={form.name}
          handleChange={handleChange}
        />
         <FormField
          LabelName="Prompt"
          type="text"
          name='Prompt'
          placeholder="an oil painting by Matisse of a humanoid robot playing chess"
          value={form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe = {handleSurpriseMe}
        />
      </form>
    </section>
  );
};

export default CreatePost;
