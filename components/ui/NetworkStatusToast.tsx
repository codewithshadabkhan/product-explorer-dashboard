"use client";

import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { Wifi, WifiOff } from "lucide-react";
import { useNetworkStatus } from "@/hooks/useNetworkStatus";

const NetworkStatusToast = () => {
  const isOnline = useNetworkStatus();
  const wasOnline = useRef(isOnline);

  useEffect(() => {
    if (wasOnline.current === isOnline) return;

    if (!isOnline) {
      toast.error("You are offline", {
        description: "Check your internet connection",
        icon: <WifiOff className="h-4 w-4" />,
        duration: Infinity,
        id: "network-status",
      });
    } else {
      toast.success("Back online", {
        description: "Connection restored",
        icon: <Wifi className="h-4 w-4" />,
        duration: 3000,
        id: "network-status",
      });
    }

    wasOnline.current = isOnline;
  }, [isOnline]);

  return null;
};

export default NetworkStatusToast;
