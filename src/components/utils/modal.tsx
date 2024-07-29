'use client';

import { twMerge } from 'tailwind-merge';

export interface PropsNewModal {
  children: any;
  onClose: any;
  animate?: boolean;
  styleExternal?: string;
  styleInternal?: string;
  id?:string
}

export function ModalComponent({
  onClose,
  animate,
  children,
  styleExternal,
  styleInternal,
}: PropsNewModal) {
  const handleOutsideClick = (e: any) => {
    if (animate) {
      setTimeout(() => {
        if (e.target.id === "external_modal") {
          onClose();
        }
      }, 500);
    } else {
      if (e.target.id === "external_modal") {
        onClose();
      }
    }
  };

  return(
    <div
      aria-hidden="true"
      id={"external_modal"}
      onClick={(e) => handleOutsideClick(e)}
      className={`${
        styleExternal ? styleExternal : 'bg-black/40'
      } flex justify-center items-center max-w-full  w-full md:w-screen h-full fixed  top-0 right-0 z-40 `}
    >
      <div
        id="internal_modal"
        className={twMerge(
          `absolute z-50 flex justify-start items-start  md:rounded-md overflow-hidden scrollbar-none  `,
          styleInternal,
        )}
      >
        {children}
      </div>
    </div>
  );
}