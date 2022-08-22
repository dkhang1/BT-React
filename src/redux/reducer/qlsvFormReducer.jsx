const stateDefault = {
  arrSinhVien: [
    {
      maSV: 1,
      hoTen: "Nguyễn Văn A",
      sdt: "0916777777",
      email: "nva@gmail.com",
    },
  ],
  sinhVien: {
    maSV: "",
    hoTen: "",
    sdt: "",
    email: "",
  },
  error: {
    maSV: "",
    hoTen: "",
    sdt: "",
    email: "",
  },
};
export const qlsvFormReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LAY_THONG_TIN_INPUT": {
      let { id, value } = action.payload;
      state.sinhVien[id] = value;
      state.sinhVien = { ...state.sinhVien };
      return { ...state };
    }
    case "THEM_SINH_VIEN": {
      let { sinhVien } = action.payload;
      let arrSinhVienUpdate = [...state.arrSinhVien];
      arrSinhVienUpdate.push(sinhVien);
      state.arrSinhVien = arrSinhVienUpdate;
      return { ...state };
    }
    case "XOA_SINH_VIEN": {
      let { maSVClick } = action.payload;
      let arrSinhVienUpdate = [...state.arrSinhVien];
      arrSinhVienUpdate = arrSinhVienUpdate.filter(
        (sv) => sv.maSV != maSVClick
      );
      state.arrSinhVien = arrSinhVienUpdate;
      return { ...state };
    }
    default:
      return state;
  }
};
