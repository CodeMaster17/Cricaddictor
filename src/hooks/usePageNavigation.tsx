import { useNavigate } from 'react-router-dom'

type usePageNavigationType = {
    route: string
}

export const usePageNavigation = (props: usePageNavigationType) => {
    const navigate = useNavigate()

    const navigateToPage = () => {
        navigate(props.route)
    }

    return { navigateToPage }
}
