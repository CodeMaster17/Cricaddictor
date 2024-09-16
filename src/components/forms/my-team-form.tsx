

import { errorMessage } from "@/constants/errorMessage"
import { ROUTE_TOSS_PAGE } from "@/routes"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { z } from "zod"
import { usePageNavigation } from "../../hooks/usePageNavigation"
import NextButton from "../NextButton"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"


const formSchema = z.object({
    USER_TEAM: z.string().min(2, {
        message: errorMessage.MIN_USERNAME_CHARACTERS,
    }),
    OPPONENT_TEAM: z.string().min(2, {
        message: errorMessage.MIN_USERNAME_CHARACTERS,
    }),

})

const TeamName = () => {

    const [isDisabled, setIsDisabled] = useState(false)

    // redux
    const dispatch = useDispatch();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            USER_TEAM: "",
            OPPONENT_TEAM: "",
        },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsDisabled(true)
        dispatch({ type: "cricaddicor/reducer_setTeamNameA", payload: values.USER_TEAM })
        dispatch({ type: "cricaddicor/reducer_setTeamNameB", payload: values.OPPONENT_TEAM })
        usePageNavigation({ route: ROUTE_TOSS_PAGE })
    }

    return (
        <>
            <div className='w-full px-3 pt-2 '>
                <div className="mt-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                disabled={isDisabled}
                                control={form.control}
                                name="USER_TEAM"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your team</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your team name" className="focus:border-zomato_red" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                disabled={isDisabled}
                                control={form.control}
                                name="OPPONENT_TEAM"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Opponent team</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Opponent team name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <NextButton type="submit" text="Toss coin"
                                disabled={isDisabled} />
                        </form>
                    </Form>
                </div>
            </div>

        </>
    )
}

export default TeamName
