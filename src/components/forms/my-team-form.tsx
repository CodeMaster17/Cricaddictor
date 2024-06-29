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
import { useNavigate } from "react-router-dom"
// import { setTeamAPlayers } from "../../lib/slice";

const formSchema = z.object({
    teamAPlayer1: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    teamAPlayer2: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),

})

const TeamName = () => {

    const [isDisabled, setIsDisabled] = useState(false)
    const navigate = useNavigate()
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
        dispatch({ type: "cricaddicor/reducer_setTeamNameA", payload: { teamA: values.teamAPlayer1 } })
        dispatch({ type: "cricaddicor/reducer_setTeamNameB", payload: { teamB: values.teamAPlayer2 } })
        navigate('/toss')
    }

    return (
        <>
            <div className='w-4/5 h-[350px] border-2 mt-8'>
                <p>Choose team names</p>
                <div className="mt-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                disabled={isDisabled}
                                control={form.control}
                                name="teamAPlayer1"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your team</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your team name" {...field} />
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
                                        <FormLabel>Opponent team</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Opponent team name" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button disabled={isDisabled} type="submit" className="float-right">Next</Button>
                        </form>
                    </Form>
                </div>
            </div>

        </>
    )
}

export default TeamName
