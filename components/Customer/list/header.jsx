import {
  AiOutlinePlusCircle,
  AiOutlineFileSearch,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import Link from "next/link";

export const thead = [
  {
    Header: "Username",
    accessor: "username",
  },
  {
    Header: "Status",
    accessor: "is_active",
    Cell: ({ cell: { value } }) => (
      <p>{value.toString() ? "Active" : "Inactive"}</p>
    ),
  },
  {
    Header: "Fullname",
    accessor: "deposit",
    id: "fullname",
    Cell: ({ cell: { value } }) => <p>{value[0].fullname}</p>,
  },
  {
    Header: "Phone number",
    accessor: "deposit",
    id: "phone_number",
    Cell: ({ cell: { value } }) => <p>{value[0].phone_number}</p>,
  },
  {
    Header: "Balance",
    accessor: "deposit",
    id: "balance",
    Cell: ({ cell: { value } }) => <p>{value[0].deposit_amount}</p>,
  },
  {
    Header: "Deposit",
    Cell: ({ cell: { value } }) => (
      <button className=" bg-white text-sky-500 font-bold py-2 px-6 rounded-full whitespace-nowrap ">
        <Link href="/coming">
          <a href="">
            <AiOutlinePlusCircle className=" w-6 h-6" />
          </a>
        </Link>
      </button>
    ),
  },
  {
    Header: "Withdraw",
    Cell: ({ cell: { value } }) => (
      <button className=" bg-white text-red-500 font-bold py-2 px-8 rounded-full whitespace-nowrap ">
        <Link href="/coming">
          <a>
            <AiOutlineMinusCircle className=" w-6 h-6" />
          </a>
        </Link>
      </button>
    ),
  },
  {
    Header: "Purchase History",
    Cell: ({ cell: { value } }) => (
      <button className=" bg-white text-sky-500 font-bold py-2 px-12 rounded-full whitespace-nowrap ">
        <Link href="/coming">
          <a>
            <AiOutlineFileSearch className=" w-6 h-6" />
          </a>
        </Link>
      </button>
    ),
  },
  {
    Header: "Edit",
    accessor: "id",
    Cell: ({ cell: { value } }) => (
      <button
        className="text-red-400"
        onClick={() => {
          console.log(value);
        }}
      >
        Edit
      </button>
    ),
  }
];
