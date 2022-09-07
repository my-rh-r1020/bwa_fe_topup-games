import React from "react";

// export default function TextInput({ label, type, name, placeholder, value, onChange }) {
//   return (
//     <div className="pt-50">
//       <label className="form-label text-lg fw-medium color-palette-1 mb-10">{label}</label>
//       <input type={type} className="form-control rounded-pill text-lg" id="email" aria-describedby="email" name={name} value={value} placeholder={placeholder} onChange={onChange} />
//     </div>
//   );
// }

type TextInputProps = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: any;
};

const TextInput = ({ label, type, name, placeholder, value, onChange }: TextInputProps) => {
  return (
    <div className="pt-50">
      <label className="form-label text-lg fw-medium color-palette-1 mb-10">{label}</label>
      <input type={type} className="form-control rounded-pill text-lg" id="email" aria-describedby="email" name={name} value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default TextInput;
