import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import SupabaseLogo from "../components/SupabaseLogo";
import NextJsLogo from "../components/NextJsLogo";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="w-full flex flex-col items-center">
      <div className="animate-in flex flex-col gap-14 opacity-0 max-w-4xl px-3 py-16 lg:py-24 text-foreground">
        <div className="flex flex-col items-center mb-4 lg:mb-12">
          <h1 className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center my-12">
            Atteint ton <strong>Product Market Fit</strong> avec{" "}
            <strong>fluidité</strong> et <strong>sérénité</strong> !
          </h1>
          <em className="text-xl lg:text-2xl !leading-tight mx-auto max-w-xl text-center my-12">
            A venir...
          </em>
        </div>
      </div>
    </div>
  );
}
