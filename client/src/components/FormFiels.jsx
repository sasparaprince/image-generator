import React from "react";

const FormFiels = ({
  LabelName,
  type,
  name,
  placeholder,
  value,
  handlerChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2 my-3" >
        <label
          htmlFor="name"
          className="bloack text-sm font-medium text-gray-9000"
        >
          {" "}
          {LabelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px]text-black"
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handlerChange}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border=[#4649ff] outline-none block w-full p-3"
      />
    </div>
  );
};

export default FormFiels;
