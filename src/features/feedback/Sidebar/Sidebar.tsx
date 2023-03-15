import React from "react";
import styled from "styled-components";

function Sidebar({ children }: { children?: React.ReactNode }) {
  return (
    <SidebarStyles>
      <aside>
        <div className='logo-card'>
          <h3>
            Frontend Mentor
            <span>Feedback Board</span>
          </h3>
        </div>
        {children}
      </aside>
    </SidebarStyles>
  );
}

export default Sidebar;

const SidebarStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .logo-card {
    background: radial-gradient(
        128.88% 128.88% at 103.9% -10.39%,
        #e84d70 0%,
        #a337f6 53.09%,
        #28a7ed 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border-radius: 10px;
    height: 137px;
    padding: 24px;
    display: flex;
    justify-content: end;
    flex-direction: column;
    color: var(--white);
    padding-bottom: 30px;

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 22px;

      span {
        display: block;
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
`;
