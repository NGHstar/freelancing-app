import LoadingIndicator from "../../ui/LoadingIndicator";
import Table from "../../ui/Table";
import UserRow from "./UserRow";
import useUsers from "./useUsers";

function UsersTable() {
  // ---
  const { isLoading, users } = useUsers();

  if (isLoading) return <LoadingIndicator />;

  if (!users || !users.length) return <EmptyList mt="m-24" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام کاربر</th>
        <th>ایمیل</th>
        <th>شماره موبایل</th>
        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <UserRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default UsersTable;
