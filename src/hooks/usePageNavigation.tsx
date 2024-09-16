import { useNavigate } from 'react-router-dom'


type usePageNavigationType = {
    route: string
}


export const usePageNavigation = (props: usePageNavigationType) => {
    const navigate = useNavigate()
    navigate(props.route)
}

