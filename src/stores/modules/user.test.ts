import type { UserInfo } from '@/api/system/user';

import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';

import { useUserStore } from './user';

describe('useUserStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('returns correct user info', () => {
    const store = useUserStore();
    const userInfo: UserInfo = {
      avatar: 'test',
      createBy: '',
      createdAt: '',
      email: '',
      id: 1,
      isAdmin: true,
      nickname: 'test',
      phoneNumber: '',
      remark: '',
      roles: [],
      sex: 1,
      status: 1,
      updatedAt: '',
      username: 'admin',
    };
    store.setUserInfo(userInfo);
    expect(store.userInfo).toEqual(userInfo);
  });

  // 测试重置用户信息时的行为
  it('reset user info', () => {
    const store = useUserStore();
    const userInfo = {
      avatar: 'test',
      createBy: '',
      createdAt: '',
      desc: '',
      email: '',
      homePath: '',
      id: 1,
      isAdmin: true,
      nickname: 'test',
      phoneNumber: '',
      remark: '',
      roles: [],
      sex: 1,
      status: 1,
      token: '',
      updatedAt: '',
      username: 'admin',
    };
    store.setUserInfo(userInfo);
    expect(store.userInfo).toBeNull();
    expect(store.userRoles.length).toBeGreaterThan(0);
  });

  // 测试在没有用户角色时返回空数组
  it('returns an empty array for userRoles if not set', () => {
    const store = useUserStore();
    expect(store.userRoles).toEqual([]);
  });
});
