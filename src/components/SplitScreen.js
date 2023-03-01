import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
//whatever we pass in to pane will replace the default weight here
const Pane = styled.div`
  flex: ${props => props.weight}
`;

//since we render lh and rh as children, we dont need to pass as props through splitscreen to left and right, we can just go left and right directly
export const SplitScreen = ({
  // left: Left,
  // right: Right,
  children,
  leftWeight = 1,
  rightWeight = 1, 
}) => {
  // this is more dev friendly as we pass the components as children instead of props
  // also allows us to pass our props through to these children easier
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>
        {left}
      </Pane>
      <Pane weight={rightWeight}>
        {right}
      </Pane>
    </Container>
  );
}