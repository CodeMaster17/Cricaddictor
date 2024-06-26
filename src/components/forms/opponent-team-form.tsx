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
import { store } from "../../../redux/store/store"
import { useNavigate } from "react-router-dom"
// import { setTeamBPlayers } from "../../lib/slice";


const formSchema = z.object({
    teamBPlayer1: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    teamBPlayer2: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),

})

const OpponentTeamForm = () => {

    const [isDisabled, setIsDisabled] = useState(false)
    const navigate = useNavigate()

    console.log(store.getState())
    // redux
    const dispatch = useDispatch();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            teamBPlayer1: "",
            teamBPlayer2: "",
        },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsDisabled(true)
        // dispatch(setTeamBPlayers({
        //     player1: values.teamBPlayer1,
        //     player2: values.teamBPlayer2,
        // }));
        dispatch({ type: "cricaddicor/reducer_setPlayerNames_teamB", payload: { player1: values.teamBPlayer1, player2: values.teamBPlayer2 } })
        navigate('/choose-side')
    }

    return (
        <>
            <div className='w-4/5 h-[350px] border-2 mt-8'>
                Team A:

                <p>Opponent team</p>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                disabled={isDisabled}
                                control={form.control}
                                name="teamBPlayer1"
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
                                name="teamBPlayer2"
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
                            <Button disabled={isDisabled} type="submit">Next</Button>
                        </form>
                    </Form>
                </div>
            </div>

        </>
    )
}

export default OpponentTeamForm
