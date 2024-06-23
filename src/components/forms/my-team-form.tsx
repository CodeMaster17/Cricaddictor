"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"




// redux
import { useDispatch } from "react-redux";
import { setTeamAPlayers } from "../../lib/slice";

const formSchema = z.object({
    teamAPlayer1: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    teamAPlayer2: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),

})

const TeamSelectorA = () => {

    const [isDisabled, setIsDisabled] = useState(false)

    // redux
    const dispatch = useDispatch();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            teamAPlayer1: "",
            teamAPlayer2: "",
        },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsDisabled(true)
        console.log(values)
        dispatch(setTeamAPlayers({
            player1: values.teamAPlayer1,
            player2: values.teamAPlayer2,
        }));
    }

    return (
        <>
            <div className='w-4/5 h-[350px] border-2 mt-8'>
                <p>Team A</p>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                disabled={isDisabled}
                                control={form.control}
                                name="teamAPlayer1"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Player 1</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Player name 1" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                disabled={isDisabled}
                                control={form.control}
                                name="teamAPlayer2"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Player 2</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Player name 2" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button disabled={isDisabled} type="submit" className="bg-purple">Next</Button>
                        </form>
                    </Form>
                </div>
            </div>

        </>
    )
}

export default TeamSelectorA
