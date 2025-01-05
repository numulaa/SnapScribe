"use client";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { SnapshotsWithUserProfileType } from "@/lib/types";
import { formatDate } from "@/lib/utils";

const SnapshotsCard = ({ data }: { data: SnapshotsWithUserProfileType }) => {
  const {
    id,
    description,
    extracted_text,
    imageUrl,
    created_at,
    title,
    user_profiles,
  } = data;

  return (
    <li className="snapshot-card group">
      <div className="flex-between">
        <p className="snapshot-card_date">{formatDate(created_at)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">10</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex flex-col gap-1.5">
          <Link href={`/user/${data.user_id}`}>
            <p className="text-16-medium line-clamp-1">
              {user_profiles?.display_name}
            </p>
          </Link>
          <Link href={`/snapshot/${data.id}`}>
            <h3 className="text-26-semibold line-clamp-1">{data.title}</h3>
          </Link>
        </div>

        <Link href={`/user/${user_profiles?.id}`}>
          <Image
            src={user_profiles?.avatar_url!}
            alt={user_profiles?.display_name!}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/snapshot/${id}`}>
        <p className="snapshot-card_desc">{description}</p>
        <img
          src={data.imageUrl!}
          alt="snapshot image"
          className="snapshot-card_img"
        />
      </Link>
      <div className="flex-between gap-3 mt-5">
        {/* <Link href={`/?query=${category?.toLowerCase()}`}> */}
        <p className="text-16-medium">categories go here</p>
        {/* </Link> */}
        <button className="snapshot-card_btn">
          <Link href={`/snapshot/${id}`}>Details</Link>
        </button>
      </div>
    </li>
  );
};

export default SnapshotsCard;
