import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export type SnapshotsCardType = {
  id: number;
  userId: number;
  title: string;
  description: string;
  createdAt: Date;
  extractedText: string;
  imageUrl: string;
};
const SnapshotsCard = ({ data }: { data: SnapshotsCardType }) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup-card_date">Date</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">10</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex flex-col gap-1.5">
          {/* <Link href={`/user/${author?._id}`}> */}
          <p className="text-16-medium line-clamp-1">Creator name</p>
          {/* </Link> */}
          <Link href={`/snapshot/${data.id}`}>
            <h3 className="text-26-semibold line-clamp-1">{data.title}</h3>
          </Link>
        </div>

        {/* <Link href={`/user/${author?._id}`}> */}
        <Image
          src="/logo.png"
          alt="creator pic"
          width={48}
          height={48}
          className="rounded-full"
        />
        {/* </Link> */}
      </div>
      {/* <Link href={`/snapshot/${_id}`}> */}
      <p className="startup-card_desc">Description goes here</p>
      <img
        src={data.imageUrl}
        alt="startup image"
        className="startup-card_img"
      />
      {/* </Link> */}
      <div className="flex-between gap-3 mt-5">
        {/* <Link href={`/?query=${category?.toLowerCase()}`}> */}
        <p className="text-16-medium">categories go here</p>
        {/* </Link> */}
        <button className="startup-card_btn">
          {/* <Link href={`/startup/${_id}`}>Details</Link> */}
          Details
        </button>
      </div>
    </li>
  );
};

export default SnapshotsCard;
