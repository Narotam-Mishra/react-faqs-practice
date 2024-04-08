/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import { useState } from "react";


function Folder({name, content, isOpen, onToggle}){
    const handleClick = () => {
        console.log("Item clicked");
        onToggle(name);
    }

    return (
      <ul>
        <li onClick={handleClick}>
          <span>{name}</span>
          {isOpen && (
            <ul>
              {Object.entries(content).map(([key, value]) => (
                <li key={key}>
                  {typeof value === "object" ? (
                    <Folder
                      name={key}
                      content={value}
                      isOpen={isOpen && isOpen[name]}
                      onToggle={onToggle}
                    />
                  ) : (
                    <span>{`${key}: ${value}`}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    );
}

function FolderStructure({ data }){
    const [openFolder, setOpenFolder] = useState({});

    const toggleFolder = (folderName) => {
        setOpenFolder(prevState => ({
            ...prevState,
            [folderName] : !prevState[folderName],
        }));
    };
    return (
      <Folder
        name="Root"
        content={data}
        isOpen={openFolder["Root"]}
        onToggle={toggleFolder}
      />
    );
}

const data = {
  folder1: {
    file1: "content1",
    file2: "content2",
  },
  folder2: {
    file3: "content3",
    file4: "content4",
    subfolder: {
      file5: "content5",
    },
  },
};

const JSObjectAsFolder = () => {
  return (
    <div>
        <h2>JSON Folder Structure</h2>
        <FolderStructure data={data}/>
    </div>
  )
}

export default JSObjectAsFolder