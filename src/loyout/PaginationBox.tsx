import { Pagination , Box} from '@mui/material'

type InputProps = {
    paginationId: (event: React.ChangeEvent<unknown>, page:number) => void 
    page: number   
}

export const PaginationBox = ( props: InputProps) => {
    return(
        
        <Pagination sx={{  
            alignSelf: 'center',
        }} page={props.page} count={122} color="secondary" onChange={props.paginationId}  />
        
    )
}