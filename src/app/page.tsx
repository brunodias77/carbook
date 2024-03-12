"use server"
import Image from "next/image";
import Container from "@/components/container";
import Feed from "@/components/feed";
import photosGet from "@/actions/photo-get";

export default async function Home() {
  const data = await photosGet();
  return (
    <Container>
      <Feed photos={data} />
    </Container>
  );
}
