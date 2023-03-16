import { styled } from "../../configs";

export const MainContainer = styled('div', {})

export const PageH1 = styled('h1', {
    fontWeight: 'normal',
    fontSize: '2rem',
})

export const StatsWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '10rem',
    fontSize: '3rem'

})

export const StatsItem = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyItems: 'center'
})