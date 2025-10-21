"use client"
import Loading from "@/app/loading";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect } from "react";

const CallbackPage = () => {
    const { user } = useUser();

    useEffect(() => {
        const loggin = async () => {
            if (!user) return;

            const email = user.emailAddresses[0].emailAddress;

            try {
                const res = await axios.post("http://localhost:3001/auth", {
                    clerk_id: user.id,
                    email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    fullName: user.fullName,
                    image_url: user.imageUrl,
                });

                if (res.status === 403) {
                    await fetch("/api/delete-user", {
                        method: "POST",
                        body: JSON.stringify({ clerkId: user.id }),
                    });

                    alert("Only NIE emails allowed! Your account has been removed.");
                }
            } catch (err) {
                console.error(err);
            }
        };

        loggin();
    }, [user]);

    if (!user) return <Loading />;
    window.location.href = "/";


    return <Loading />;
};

export default CallbackPage;
