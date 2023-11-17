import { Dialog, DialogContent } from "@mui/material";
import React, { useState } from "react";
import StatusLoading from "./StatusLoading";
import StatusQuery from "./StatusQuery";

const ActionModalLogic = ({
  children,
  editOkMessage,
  createOkMessage,
  loadingMessage,
  idEntity,
  onCancel,
}) => {
  const [status, setStatus] = useState({ status: "ready", message: "" });

  switch (status.status) {
    case "loading":
      return <StatusLoading message={loadingMessage} />;

    case "error":
      return <StatusQuery />;
    case "success":
      return (
        <StatusQuery
          message={idEntity ? editOkMessage : createOkMessage}
          closeFn={onCancel}
        />
      );

    default:
      return React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          setStatus: setStatus,
          onCancel: onCancel,
        });
      });
  }
};

const ActionModalForm = ({
  isOpen,
  children,
  editOkMessage,
  createOkMessage,
  links,
  loadingMessage,
  idEntity,
  onCancel,
}) => {
  return (
    <Dialog
      open={isOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <ActionModalLogic
          editOkMessage={editOkMessage}
          createOkMessage={createOkMessage}
          loadingMessage={loadingMessage}
          links={links}
          idEntity={idEntity}
          onCancel={onCancel}
        >
          {children}
        </ActionModalLogic>
      </DialogContent>
    </Dialog>
  );
};
export default ActionModalForm;
