"use client";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

const MainSpeedDial = () => {
  return (
    <div className="fixed bottom-10 flex lg:hidden z-50 right-10">
      <SpeedDial >
        <SpeedDialHandler>
          <IconButton placeholder={""} size="lg" className="rounded-full">
            <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent placeholder={""}>
          <SpeedDialAction placeholder={""}>
            <HomeIcon className="h-5 w-5" />
          </SpeedDialAction>
          <SpeedDialAction placeholder={""}>
            <CogIcon className="h-5 w-5" />
          </SpeedDialAction>
          <SpeedDialAction placeholder={""}>
            <Square3Stack3DIcon className="h-5 w-5" />
          </SpeedDialAction>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
};

export default MainSpeedDial;
