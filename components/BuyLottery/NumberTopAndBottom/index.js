import React from "react";
import { cx } from "@vechaiui/react";
import { Dialog, Transition } from "@headlessui/react";
import {
  FormControl,
  FormLabel,
  Divider,
  Input,
  Button,
} from "@vechaiui/react";

const NumberTopAndBottom = () => {
  const [showDialog, setShowDialog] = React.useState(false);
  const inputRef = React.useRef(null);

  const handleOpen = () => setShowDialog(true);
  const handleClose = () => setShowDialog(false);
  return (
    <>
      <div>
        <div className="grid gap-1  mx-60">
          <div className="grid grid-cols-3">
            <input
              type="radio"
              className="border p-2 text-white rounded-lg  ring-offset-fuchsia-900 mr-2 mt-2 mb-3 w-32  h-12"
              placeholder="tam"
            />

            <button className="border p-2 bg-sky-600 text-white rounded-lg mr-2 mt-2 mb-3 w-32">
              ຕໍ່າ
            </button>
            <button className="border p-2 bg-sky-600 text-white rounded-lg mr-2 mt-2 mb-3 w-32">
              ຕໍ່າ
            </button>
          </div>
          <div className="grid grid-cols-3">
            <button className="border p-2 bg-sky-600 text-white rounded-lg mr-2 mt-2 mb-3 w-32">
              ຕໍ່າ
            </button>
            <button className="border p-2 bg-sky-600 text-white rounded-lg mr-2 mt-2 mb-3 w-32">
              ຕໍ່າ
            </button>
            <button className="border p-2 bg-sky-600 text-white rounded-lg mr-2 mt-2 mb-3 w-32">
              ຕໍ່າ
            </button>
          </div>
        </div>
        <div className="p-8">
          <Button onClick={handleOpen} color="red">
            Delete Account
          </Button>
          <Transition show={showDialog} as={React.Fragment}>
            <Dialog
              initialFocus={inputRef}
              as="div"
              className="fixed inset-0 overflow-y-auto z-modal"
              open={showDialog}
              onClose={handleClose}
            >
              <Dialog.Overlay className="fixed top-0 left-0 w-screen h-screen bg-blackAlpha-600" />
              <Transition.Child
                as={React.Fragment}
                enter="transition ease-out duration-150"
                enterFrom="transform scale-95"
                enterTo="transform scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="transform scale-100"
                leaveTo="transform scale-95"
              >
                <div
                  className={cx(
                    "relative flex flex-col w-full mx-auto my-24 rounded shadow-lg",
                    "bg-white border border-gray-200",
                    "dark:bg-neutral-800 dark:border-neutral-700",
                    "max-w-md px-2"
                  )}
                >
                  <header className="relative px-3 pt-3 pb-2 text-lg font-semibold">
                    Confirm deletion
                  </header>
                  <button
                    onClick={handleClose}
                    className="absolute text-sm text-gray-600 cursor-base dark:text-gray-400 hover:text-primary-500 top-4 right-4"
                  ></button>
                  <Divider
                    orientation="horizontal"
                    className="border-neutral-200 dark:border-neutral-700"
                  />
                  <div className="flex-1 px-3 py-2 rounded-3xl">
                    <p className="mb-4 text-sm font-normal text-muted">
                      To delete your project, please enter the name of your
                      project <b>pepelele</b>. Once deleted this project will be
                      unrecoverable.
                    </p>

                    <FormControl id="name">
                      <FormLabel>Confirm name</FormLabel>
                      <Input ref={inputRef} color="red" />
                    </FormControl>
                  </div>
                  <Divider
                    orientation="horizontal"
                    className="border-neutral-200 dark:border-neutral-700"
                  />
                  <footer className="flex justify-end px-3 py-2 space-x-4">
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant="solid" color="red" onClick={handleClose}>
                      Delete
                    </Button>
                  </footer>
                </div>
              </Transition.Child>
            </Dialog>
          </Transition>
        </div>
      </div>
      {/* <div className="flex flex-col-6">
        <div className="mt-9">
          <label htmlFor="" className="">
            ຕໍ່າ
          </label>
          <input
            type="checkbox"
            className="mx-3 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
        </div>
        <div className="flex space-x-2">
          <div className="flex flex-col">
            <label htmlFor="">ບົນ</label>
            <input type="text" placeholder="ຈໍານວນເງິນ" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">ລ່າງ</label>
            <input type="text" placeholder="ຈໍານວນເງິນ" />
          </div>
        </div>

        <div className="mt-9 mx-4">
          <label htmlFor="" className="">
            ສູງ
          </label>
          <input type="checkbox" className="mx-3" />
        </div>
        <div className="flex space-x-2">
          <div className="flex flex-col">
            <label htmlFor="">ບົນ</label>
            <input type="text" placeholder="ຈໍານວນເງິນ" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">ລ່າງ</label>
            <input type="text" placeholder="ຈໍານວນເງິນ" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default NumberTopAndBottom;
