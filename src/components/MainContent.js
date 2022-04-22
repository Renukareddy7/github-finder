import React, { Fragment } from "react";
import Spinners from "./Spinners";
import Repo from "./Repo";

const MainContent = props => {
  return (
    <div className="mainBlock">
      <main className="repo_block">
        {props.loading === true ? (
          <Spinners />
        ) : (
          props.repos.map(rep => {
            return (
              <Fragment key={rep.id}>
                <Repo {...rep} />
              </Fragment>
            );
          })
        )}
      </main>
    </div>
  );
};

export default MainContent;
