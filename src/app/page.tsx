import Image from "next/image";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Users } from "@/components/users";
import { getQueryClient } from "@/lib/get-query-client";
import { queries } from "@/queries/queries";
import { CreateUser } from "@/components/create-user";

export default function Home() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(queries.getUsers());

  return (
    <>
      <CreateUser />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Users />
      </HydrationBoundary>
    </>
  );
}
