import styled from 'styled-components'

export const SliderPaginationContainer = styled.div`
  width: 86%;
  margin-bottom: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .ellipses {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .ellipse {
    width: 12px;
    height: 12px;
    border-radius: 50%;

    background-color: ${props => props.theme.pallete.background.ellipse};
  }

  .active {
    background-color: ${props => props.theme.pallete.secondary.main};
  }

  .arrows {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    img {
      cursor: pointer;
    }
  }
`
