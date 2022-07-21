import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LineDemoProps {}

const StyledLineDemo = styled.div`
  color: pink;
`;

export function LineDemo(props: LineDemoProps) {
  return (
    <StyledLineDemo>
      <h1>Welcome to LineDemo!</h1>
    </StyledLineDemo>
  );
}

export default LineDemo;
