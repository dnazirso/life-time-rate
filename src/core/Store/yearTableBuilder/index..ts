import { Year } from "../yearsSlice";

export default function yearTableBuilder(birthdate: number): Year[] {
  return Array.from({ length: 90 }, (_, i) => i).map((age) => ({
    age,
    date: new Date(birthdate).setFullYear(
      new Date(birthdate).getFullYear() + age
    ),
    joy: 0.5,
    notes: [],
  }));
}
