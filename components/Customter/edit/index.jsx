import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function index({ customer }) {
  const router = useRouter();
  const { id } = router.query;
  console.log('id',id)
  return <div>index</div>;
}
