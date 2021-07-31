import {getSession, signIn, signOut, useSession} from "next-auth/client";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import style from "./index.module.css";
import Image from 'next/image';

const IndexPage = () => {
    const [session, loading] = useSession();
    console.log(session?.user);
    return (
        <>
            {!session && <>
                Not signed in <br/>
                <button onClick={() => signIn()}>Sign in</button>
            </>}
            {session && <>
                Signed in as {session.user.name}  &nbsp;&nbsp;{session.user.email} <br/>
                <Image src={session.user.image} width={96} height={96} alt ="user avatar" />
                <button onClick={() => signOut()}>Sign out</button>
            </>}
        </>
    );
};

export default IndexPage;