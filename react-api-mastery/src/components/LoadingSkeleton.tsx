import { Skeleton } from "@mui/material";

export default function LoadingSkeleton() {
  return (
    <>
      <Skeleton height={50} />
      <Skeleton height={50} />
      <Skeleton height={50} />
    </>
  );
}