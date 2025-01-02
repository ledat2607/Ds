import { Button } from "@/components/ui/button";
import React from "react";
import Loader from "../global/loader";
import { useSubscription } from "@/hooks/useSubscription";

type Props = { language: string };

const PaymentButton = ({ language }: Props) => {
  const { onSubscribe, isProcessing } = useSubscription();

  return (
    <Button className="text-sm w-full " onClick={onSubscribe}>
      <Loader color="#000" state={isProcessing}>
        {language === "vi" ? "Nâng cấp" : "Upgrade"}
      </Loader>
    </Button>
  );
};

export default PaymentButton;
