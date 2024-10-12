"use client";
import { Calendar, Mail, Phone, MapPin, Edit2 } from "lucide-react";
import Image from "next/image";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function ProfileCard() {
  const { user } = useKindeBrowserClient();
  return (
    <div className=" bg-gray-900 rounded-lg overflow-hidden shadow-xl">
      <div className="relative h-64 sm:h-80 md:h-96">
        <Image
          src={"/images/user-background.jpg"}
          alt="Mountain landscape"
          height={200}
          width={1400}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="relative">
            <Image
              src={user?.picture || "/images/user-placeholder.jpg"}
              alt="Profile picture"
              height={120}
              width={120}
              className="w-24 h-24 rounded-full border-4 border-gray-900"
            />
            <button className="absolute bottom-0 right-0 bg-gray-800 rounded-full p-2">
              <Edit2 className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 px-4 py-16 sm:px-">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-200 capitalize">
            {user?.given_name} {user?.family_name}
          </h2>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>02 January 1988</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>{user?.email || ""}</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>India +91 123-456-7890</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>B69 Near Schoool Demo...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
