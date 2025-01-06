"use client";
import { createClient } from "@/utils/supabase/client";
import { QueryData, QueryResult } from "@supabase/supabase-js";
import { useCallback, useState, ChangeEvent } from "react";
import { useDropzone } from "react-dropzone";
import { Progress } from "../ui/progress";
import { CloudUploadIcon } from "lucide-react";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const CreateForm = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState<number>(0);
  const [uploadedImagePath, setUploadedImagePath] = useState<string | null>(
    null
  );
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const supabase = createClient();
  const { data } = supabase.storage
    .from("raw_snapshots")
    .getPublicUrl("Screenshot 2025-01-06 at 17.49.14.png");
  console.log("Image URL from supabase bucket", data);
  // const uploadImage = async (req: any) => {
  //   const { data, error } = await supabase.storage
  //     .from("raw_snapshots")
  //     .upload(req.file.path);
  // };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const image = acceptedFiles[0];
      const newImageUrl = URL.createObjectURL(image);
      setSelectedImage(image);
      setImageUrl(newImageUrl);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const image = event.target.files[0];
      const newImageUrl = URL.createObjectURL(image);
      setSelectedImage(image);
      setImageUrl(newImageUrl);
    }
  };
  console.log(imageUrl, selectedImage);
  return (
    <div className="flex flex-col items-center justify-center max-w-[400] md:max-w-[1000] rounded-2xl p-12 bg-primary-100">
      <form action="" className="w-full h-full flex flex-col gap-6">
        <div className="space-y-3 h-full w-full">
          <div {...getRootProps} className="h-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center h-[300] border-[3px] border-black px-5 py-6 border-dashed rounded-xl cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 visually-hidden-focusable w-full">
              {/* UPLOAD IN PROGRESS */}
              {isLoading && (
                <div className="text-center w-full h-full">
                  <Progress value={progress} />
                  <p className="text-sm font-semibold">Uploading Picture</p>
                  <p className="text-xs text-gray-400">
                    Do not refresh or perform any other action while the picture
                    is being uploaded
                  </p>
                </div>
              )}

              {/* INITIAL STATE */}
              {!isLoading && !imageUrl && (
                <div className="text-center w-full h-full flex flex-col items-center justify-center">
                  <div className="border p-2 rounded-md max-w-min  mx-auto text-center">
                    <CloudUploadIcon />
                  </div>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium">
                      <span className="font-bold">Click to upload</span> or drag
                      and drop an image
                    </span>
                  </p>
                </div>
              )}

              {/* AFTER THE IMAGE UPLOADED */}
              {imageUrl && !isLoading && (
                <div className="text-center space-y-2 w-full h-full flex flex-col">
                  <Image
                    width={500}
                    height={500}
                    src={imageUrl}
                    className="object-contain max-h-[200] opacity-70"
                    alt="uploaded image"
                  />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">Image Uploaded</p>
                    <p className="text-xs text-gray-400">
                      Click here to upload another image
                    </p>
                  </div>
                </div>
              )}
            </label>
            <input
              type="file"
              {...getInputProps()}
              name="dropzone-file"
              id="dropzone-file"
              hidden
              onChange={handleImageChange}
              disabled={isLoading || uploadedImagePath !== null}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="description">Description (Optional)</label>
          <Textarea
            placeholder="Add description for your image"
            id="description"
            name="description"
            className=" border-[3px] border-black px-5 py-7 rounded-xl "
          />
        </div>
        <Button className="snapshot-form_btn">Transform</Button>
      </form>
    </div>
  );
};

export default CreateForm;
