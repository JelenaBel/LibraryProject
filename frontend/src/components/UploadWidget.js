import React, { useRef, useEffect } from "react";


const UploadWidget= ()=>{
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect = (()=>{
        cloudinaryRef.current = window.cloudinary;
        console.log(cloudinaryRef.current)
        
        widgetRef.current = window.cloudinary.createUploadWidget({
            cloudName: "dm5deydc6",
            uploadPreset: "wuzeqvmr",
        }, function(error, result){
            console.log(result);

        })
    }, [])
    return (
        <button onClick= {()=> widgetRef.current.open()} >Upload</button>
    )
}
export default UploadWidget;