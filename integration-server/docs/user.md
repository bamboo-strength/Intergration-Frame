CREATE TABLE t_users(  
    id VARCHAR(32) NOT NULL PRIMARY KEY,
    c_user_name VARCHAR(64) NOT NULL,
    c_user_id_card VARCHAR(20) NULL,
    c_user_phone VARCHAR(12) NULL,
    c_user_email VARCHAR(32) NULL,
    c_user_duty VARCHAR(20) NULL,
    c_user_status VARCHAR(2) NOT NULL,
    c_user_remark VARCHAR(200) NULL,
    create_id VARCHAR(32) NULL,
    create_time DATE,
    update_id VARCHAR(32) NULL,
    update_time DATE
);
COMMENT ON TABLE t_users IS '用户表';
COMMENT ON COLUMN t_users.c_user_name IS '用户名';
COMMENT ON COLUMN t_users.c_user_id_card IS '身份证号';
COMMENT ON COLUMN t_users.c_user_phone IS '手机号';
COMMENT ON COLUMN t_users.c_user_email IS '邮箱';
COMMENT ON COLUMN t_users.c_user_duty IS '职务';
COMMENT ON COLUMN t_users.c_user_status IS '状态, 0: 禁用, 1: 启用, 2: 注销, 3: 删除';
COMMENT ON COLUMN t_users.c_user_remark IS '备注';