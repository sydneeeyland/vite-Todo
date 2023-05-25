import { useState, createContext, ReactNode } from 'react';

import CreateDialog from '../Components/Dialog/CreateDialog';
import UpdateDialog from '../Components/Dialog/UpdateDialog';
import SignInDialog from '../Components/Dialog/SignInDialog';

import { InitialData, Users } from '../Constant/Common';

export const TodoServiceContext = createContext({
  userData: '',
  SignedIn: false,
  mockData: {
    ...InitialData,
  },
  updateData: {
    id: 0,
    task: '',
    user: '',
    status: '',
    comments: [],
  },
  handleCreateTask(val: unknown) {
    return val;
  },
  handleUpdateTask(val: unknown) {
    return val;
  },
  handleDeleteTask() {
    null;
  },
  handleShowCreateModal(val: unknown) {
    return val;
  },
  handleShowUpdateModal(boardType: string, id: number) {
    return [boardType, id];
  },
  handleShowSignInModal(val: unknown) {
    return val;
  },
  handleSignIn(val: unknown) {
    return val;
  },
  handleLogOut() {
    null;
  },
});

type Props = {
  children: ReactNode;
};

type payloadProps = {
  id: number;
  task: string;
  user: string;
  status: string;
  comments: [];
};

export default function TodoServiceContextProvider({ children }: Props) {
  const [SignedIn, setSignedIn] = useState(false);
  const [userData, setUserData] = useState('');
  const [mockData, setMockData] = useState<any>({ ...InitialData });
  const [updateData, setUpdateData] = useState({
    id: 0,
    task: '',
    user: '',
    status: '',
    comments: [],
  });
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
  const [showUpdateTaskModal, setShowUpdateTaskModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const handleCreateTask = (payload: payloadProps) => {
    const newState = mockData;
    newState.backlog.push(payload);
    setMockData(newState);
    setShowCreateTaskModal(false);
  };

  const handleUpdateTask = (payload: payloadProps) => {
    const { status } = payload;
    const oldValue = mockData[
      updateData.status as keyof typeof mockData
    ].filter((key: any) => key.id !== updateData.id);

    setMockData((prev: any) => ({
      ...prev,
      [status]: [payload],
      [updateData.status]: oldValue,
    }));
    setShowUpdateTaskModal(false);
  };

  const handleDeleteTask = () => {
    const oldValue = mockData[
      updateData.status as keyof typeof mockData
    ].filter((key: any) => key.id !== updateData.id);

    setMockData((prev: any) => ({
      ...prev,
      [updateData.status]: oldValue,
    }));
    setShowUpdateTaskModal(false);
  };

  const handleShowCreateModal = () => {
    setShowCreateTaskModal(true);
  };

  const handleShowUpdateModal = (boardType: string, id: number) => {
    const filter: any = mockData[boardType as keyof typeof mockData].filter(
      (key: any) => key.id === id
    )[0];
    setUpdateData(filter);
    setShowUpdateTaskModal(true);
    return [boardType, id];
  };

  const handleShowSignInModal = () => {
    setShowSignInModal(true);
  };

  const handleSignIn = (payload: any) => {
    const { username, password } = payload;
    const hasUser = Users.filter(
      (key) => key.userName === username && key.password === password
    );

    if (hasUser) {
      setSignedIn(true);
      setUserData(username);
      setShowSignInModal(false);
    }
  };

  const handleLogOut = () => {
    setUserData('');
    setSignedIn(false);
  };

  return (
    <TodoServiceContext.Provider
      value={{
        userData,
        SignedIn,
        mockData,
        updateData,
        handleCreateTask,
        handleUpdateTask,
        handleDeleteTask,
        handleShowCreateModal,
        handleShowUpdateModal,
        handleShowSignInModal,
        handleSignIn,
        handleLogOut,
      }}
    >
      {children}
      <CreateDialog
        open={showCreateTaskModal}
        handleClose={() => setShowCreateTaskModal(false)}
      />
      <UpdateDialog
        open={showUpdateTaskModal}
        handleClose={() => setShowUpdateTaskModal(false)}
      />
      <SignInDialog
        open={showSignInModal}
        handleClose={() => setShowSignInModal(false)}
      />
    </TodoServiceContext.Provider>
  );
}
