import React, { useState } from "react";

export default function TagsInput({
  tags,
  setTags,
  tagClass = "bg-chips-gray text-secondary pl-2 pr-3 py-1  rounded-full flex items-center justify-center gap-2 leading-5",
  tagsContainerClass = "flex flex-wrap gap-2 mt-2",
}) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="mt-2">
      <input
        type="text"
        className="border focus:bg-background/40 transition border-border  rounded-lg px-3 pt-3 pb-2 mb-2 w-full"
        placeholder="افزودن برچسب با فشردن کلید Enter"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <div className={tagsContainerClass}>
        {tags.map((tag, idx) => (
          <span key={idx} className={tagClass}>
            {tag}
            <button
              type="button"
              onClick={() => handleRemoveTag(tag)}
              className="ml-1 pt-1 text-sm font-bold hover:text-ired cursor-pointer transition"
            >
              ✕
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
