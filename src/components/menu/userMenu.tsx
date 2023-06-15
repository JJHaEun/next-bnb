import Link from "next/link";
import { useLogout } from "../event/hooks/useLogout";
import { useTopMenu } from "../event/hooks/useTopMenu";
import { UserMenu } from "../styles/menu/userMenu.styles";
export default function UserMenuComponent(): JSX.Element {
  const { menuOpen } = useTopMenu();
  const { logout } = useLogout();
  return (
    <UserMenu>
      <li>숙소 관리</li>
      <Link href={`/room/register/building`} legacyBehavior>
        <a role="presentation">
          <li onClick={menuOpen}>숙소 등록하기</li>
        </a>
      </Link>
      <li
        role="presentation"
        onClick={logout}
        className="header-usermenu-undder"
      >
        로그아웃
      </li>
    </UserMenu>
  );
}
