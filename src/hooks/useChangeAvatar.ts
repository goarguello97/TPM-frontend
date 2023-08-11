import { useState } from "react";
import { useAppDispatch } from "./useTypedSelector";
import { changeAvatar } from "../features/User/UserSlice";
import { REQUEST_STATUS } from "../constants/request.status";
import { User } from "../interfaces/user.interfaces";

const useChangeAvatar = (values: User) => {
  const [imageUpload, setImageUpload] = useState(null);
  const [flag, setFlag] = useState(false);
  const dispatch = useAppDispatch();

  const handleChangeAvatar = (e: any) => {
    if (!e.target.files) return;
    setImageUpload(e.target.files[0]);
  };

  const uploadFile = async (e: any) => {
    e.preventDefault();

    if (!imageUpload) return;
    const formData = new FormData();
    formData.append("image", imageUpload);
    formData.append("id", values?._id);
    try {
      const result = await dispatch(changeAvatar(formData));
      if (result.payload.status === REQUEST_STATUS.SUCCESS) {
        setFlag(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { handleChangeAvatar, uploadFile, flag , setFlag};
};

export default useChangeAvatar;
