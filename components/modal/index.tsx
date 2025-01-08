import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

const Modal = ({ trigger, children, title, description, className }: Props) => {
  return (
    <Dialog>
      <DialogTrigger className={className} asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="bg-gray-800">
        <DialogHeader>
          <DialogTitle className="uppercase">{title}</DialogTitle>
          <DialogDescription className="text-gray-800">
            {description}
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
