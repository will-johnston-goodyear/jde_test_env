export interface JDEOption {
  id: string;
  isRequired: boolean;
  label: string;
  optionTagLabels?: string[];
  orderIdx: number;
}

export interface JDEImage {
  id: string;
  thumbnailUrl: string;
  orignalUrl: string;
}

export interface Answer {
  id: string;
  value?: string | string[];
  optionId?: string;
  imageIds?: string[];
  iamge?: JDEImage;
}

export interface MakeModelYear {
  make: string;
  model: string;
  year: number;
}

export enum DriveTypeEnum {
  AWD = "A",
  RWD = "R",
  FWD = "F"
}

export type DriveType = "A" | "R" | "F";

export enum VehiclePowertrainEnum {
  ELECTRIC = "electric",
  INTERNAL_COMBUSTION = "internal_combustion",
  HYBRID = "hybrid",
  HYDROGEN = "hyrdrogen"
}

export type VehiclePowertrain =
  | "electric"
  | "internal_combustion"
  | "hybrid"
  | "hydrogen";

export enum VehicleStatusEnum {
  ACTIVE = "active",
  PENDING = "pending",
  INACTIVE = "inactive",
  ARCHIVED = "archived",
  DEFLEETED = "defleeted"
}

export type VehicleStatus =
  | "active"
  | "pending"
  | "inactive"
  | "archived"
  | "defleeted";

export interface CTSystemDetail {
  id: string;
  orderIdx?: number;
  companyId: string[];
  makeModelYear: MakeModelYear[];
  driveType: DriveType[];
  mileageMinValue: number;
  mileageMaxValue: number;
  isRotational: boolean;
  tireSizes: string[];
  vehiclePowertrain: VehiclePowertrain[];
  vehicleStatuses: VehicleStatus[];
}

export enum ConditionalJobActionEnum {
  SHOW_ALL = "SHOW_ALL",
  SHOW_ONE = "SHOW_ONE",
  HIDE_ALL = "HIDE_ALL",
  HIDE_ONE = "HIDE_ONE"
}

export type ConditionalJobAction =
  | "SHOW_ALL"
  | "SHOW_ONE"
  | "HIDE_ALL"
  | "HIDE_ONE";

export interface ArtificialCTSystemDetail extends CTSystemDetail {
  conditionalJobAction: ConditionalJobAction;
  tirePsis: string[];
  grooveCounts: string[];
  wheelTorques: string[];
}

export interface CTQuestion extends JDEQuestion {
  conditionalJobQuestionId?: string;
  jobRenderedByMin?: number;
  jobRenderedByMax?: number;
  jobRenderedByOptionIds?: string[];
  conditionalTaskQuestionId?: string;
  taskRenderedByMin?: number;
  taskRenderedByMax?: number;
  taskRenderedByOptionIds?: string[];
}

export enum QuestionTypesEnum {
  SELECT_YES_NO = "SELECT_YES_NO",
  SELECT_ONE = "SELECT_ONE",
  SELECT_ONE_DROPDOWN = "SELECT_ONE_DROPDOWN",
  SELECT_ONE_DROPDOWN_VALUE = "SELECT_ONE_DROPDOWN_VALUE",
  SELECT_MULTIPLE = "SELECT_MULTIPLE",
  TEXT = "TEXT",
  NUMERIC = "NUMERIC",
  NUMERIC_DUAL = "NUMERIC_DUAL",
  RATING = "RATING",
  UPLOAD_SINGLE_PHOTO = "UPLOAD_SINGLE_PHOTO",
  PARENT = "PARENT",
  SUB_PARENT = "SUB_PARENT",
  INFO = "INFO",
  TEXT_INPUT = "TEXT_INPUT",
  TEL = "TEL",
  ADDRESS = "ADDRESS"
}

export interface Alert {
  id: string;
  body: string;
  renderedByOptionIds: string[];
  renderedByMin: number;
  renderedByMax: number;
  recipientRoles: string[];
}

export type AcceptedValues = string | number | boolean;

export interface JDEQuestion {
  id: string;
  label: string;
  type: string;
  children: Array<JDEQuestion> | null;
  conditionalQuestionParentId?: string;
  alerts: Array<Alert> | null;
  isRequired?: boolean;
  isBridgit?: boolean;
  isStandard?: boolean;
  defaultOption?: string;
  options: JDEOption[] | null;
  orderIdx?: number;
  placeholder: string;
  rangeMax?: number;
  rangeMin?: number;
  renderedByOptionIds?: string[];
  renderedByMin?: number;
  renderedByMax?: number;
  tagDescription?: string;
  tagIsBridgit?: boolean;
  tagLabel?: string;
  answers: Answer[] | null;
  position: string | null;
  isVerifiable?: boolean;
  assumedValue?: AcceptedValues;
  requiredCVDFields?: string[];
  anomalyCheck: null;
}

export interface JobCTQuestion extends JDEQuestion {
  conditionalJobQuestionId: string;
  jobRenderedByMax: number;
  jobRenderedByMin: number;
  jobRenderedByOptionIds: string[];
}

export interface StepMetaData {
  dateStarted: string;
  dateCompleted: string;
}

export interface JDETask {
  id: string;
  baseTaskId?: string;
  estimatedMinutes?: number;
  instructions: string;
  inventory: string | null;
  isStandard?: boolean;
  name: string;
  orderIdx?: number;
  questions: JDEQuestion[];
  categoryId?: string;
  renderedByDriveTypes?: string[];
  renderedByOptionId?: string;
  conditionalTaskAction?: ConditionalJobAction;
  renderedByQuestions?: CTQuestion[];
  renderedByVehicleDetails?: CTSystemDetail[];
  renderedByVehicleDetailsArtificial?: ArtificialCTSystemDetail[];
  baseTaskTagName?: string;
  baseTaskTagDescription?: string;
  baseTaskTagId: string;
  taskTagDescription: string;
  taskTagId: string;
  taskTagName: string;
}

export interface GroupSummary {
  companyId: string;
  dateDeleted: string;
  isCustomerCreated: boolean;
  vehicleGroupId: string;
  vehicleGroupname: string;
  vehicleGroupTypeId: string;
  vehicleGroupTypeName: string;
  vin: string;
  visibleToTechnicians: boolean;
}
export enum CannotCompleteServiceFormIds {
  SELECT_REASON = "SELECT_REASON",
  REASON_SERVICE_NOT_NEEDED = "REASON_SERVICE_NOT_NEEDED",
  EXPL_VEHICLE_DAMAGED = "EXPL_VEHICLE_DAMAGED",
  EXPL_VEHICLE_IMOBILIZED = "EXPL_VEHICLE_IMOBILIZED",
  OPTION_VEHICLE_DAMAGED_YES = "OPTION_VEHICLE_DAMAGED_YES",
  OPTION_VEHICLE_DAMAGED_NO = "OPTION_VEHICLE_DAMAGED_NO",
  REASON_OTHER = "REASON_OTHER",
  EXPL_OTHER = "EXPL_OTHER",
  REASON_VEHICLE_NOT_AT_LOCATION = "REASON_VEHICLE_NOT_AT_LOCATION",
  REASON_CANNOT_ACCESS_VEHICLE_LOCATION = "REASON_CANNOT_ACCESS_VEHICLE_LOCATION",
  INFO_CANNOT_ACCESS_VEHICLE_LOCATION = "INFO_CANNOT_ACCESS_VEHICLE_LOCATION",
  REASON_CANNOT_ACCESS_VEHICLE_INTERIOR = "REASON_CANNOT_ACCESS_VEHICLE_INTERIOR",
  EXPL_CANNOT_ACCESS_VEHICLE_INTERIOR = "EXPL_CANNOT_ACCESS_VEHICLE_INTERIOR",
  OPTION_RETRIEVE = "OPTION_RETRIEVE",
  OPTION_HOOD_ACCESS = "OPTION_HOOD_ACCESS",
  OPTION_INSPECTION = "OPTION_INSPECTION",
  INFO_INSPECTION = "INFO_INSPECTION",
  REASON_TOOLS_MISSING = "REASON_TOOLS_MISSING",
  ADDITIONAL_NOTES = "ADDITIONAL_NOTES"
}

export enum CannotCompleteServiceFormIdsString {
  REASON_SERVICE_NOT_NEEDED = "Service not needed",
  REASON_VEHICLE_DAMAGED = "Significant damage to vehicle",
  REASON_OTHER = "Other",
  REASON_VEHICLE_NOT_AT_LOCATION = "Vehicle is not at location",
  REASON_CANNOT_ACCESS_VEHICLE_LOCATION = "Cannot access the vehicle location",
  REASON_CANNOT_ACCESS_VEHICLE_INTERIOR = "Cannot access the interior of the vehicle",
  REASON_TOOLS_MISSING = "I don't have required tools or parts for this job",

  OPTION_RETRIEVE = "To retrieve something from the interior",
  OPTION_HOOD_ACCESS = "For hood access",
  OPTION_INSPECTION = "Needed for tire inspection or cleaning interior"
}

export interface CancelReasons {
  additionalNotes: string;
  cancelReasonId: string;
  canceledBy: string;
  dateCanceled: string;
  explanation: string;
  needForInteriorAccess: CannotCompleteServiceFormIds[];
  queueItemId: string;
  reason: CannotCompleteServiceFormIdsString;
  vehicleImmobilized: boolean;
}

export interface JDEJob {
  conditionalJobAction?: ConditionalJobAction;
  id: string;
  jobTagLabels?: string[];
  name: string;
  orderIdx?: number;
  renderedByQuestions?: JobCTQuestion[] | null;
  renderedByVehicleDetails?: CTSystemDetail[] | null;
  renderedByVehicleDetailsArtificial?: ArtificialCTSystemDetail[] | null;
  tasks: JDETask[];
  type: string;
  companies: string;
  hidden: boolean | null;
}

export interface Step {
  id: string;
  name: string;
  orderIdx?: number;
  jobs: JDEJob[];
  metadata: StepMetaData;
}

export enum ServiceImpact {
  HIGH = "high",
  MODERATE = "moderate",
  MEDIUM = "medium",
  LOW = "low"
}

export enum QueueItemStatusEnum {
  PENDING = "PENDING",
  SCHEDULED = "SCHEDULED",
  RESCHEDULED = "RESCHEDULED", // Technically the FE will never see a Rescheduled appointment because a Scheduled one is only Rescheduled on the BE and then a new one is Scheduled
  MISSED_TECH = "MISSED_TECH",
  MISSED_BRIDGIT = "MISSED_BRIDGIT",
  COMPLETED = "COMPLETED",
  PROJECTED = "PROJECTED"
}

export type QueueItemStatus =
  | "PENDING"
  | "SCHEDULED"
  | "RESCHEDULED"
  | "MISSED_TECH"
  | "MISSED_BRIDGIT"
  | "COMPLETED"
  | "PROJECTED";

export enum FuelType {
  GASOLINE = "Gasoline",
  DIESEL = "Diesel"
}

export interface Summary {
  queueItemId: string;
  impact: ServiceImpact | null;
  serviceLocationId: string;
  canceledByEmail: string;
  cancelReason: CancelReasons | null;
  canceledByFirstName: string;
  canceledByLastName: string;
  canceledByUserId: string;
  dateCreated: string;
  dateCompleted: string;
  dateCanceled: string;
  dateDeleted: string;
  dateScheduled: string;
  techHasTools: boolean;
  techHasSafetyGear: boolean;
  completedBy: string;
  servicedBy: string;
  scheduledTechEmail: string;
  scheduledTechFirstName: string;
  scheduledTechLastName: string;
  vin: string;
  durationMinutes: number;
  status: QueueItemStatus;
  vehicleId: string;
  accessNotes: string;
  color: string;
  make: string;
  model: string;
  year: number;
  license: string;
  companyId: string;
  companyName: string;
  techFirstName: string;
  techLastName: string;
  techEmail: string;
  techUserId: string;
  serviceId: string;
  serviceLocation: string;
  serviceName: string;
  additionalComments: string;
  serviceIsStandard: boolean;
  serviceTagLabel?: string;
  driveType: DriveType;
  mileage: number | null;
  frontTirePsi: string;
  frontTireSize: string;
  rearTirePsi: string;
  rearTireSize: string;
  isRotational: boolean;
  vehiclePowertrain: VehiclePowertrain;
  wheelTorqueFtplbs: string;
  grooveCount: number;
  oilSpecification: string;
  fuelType: FuelType;
  vehicleStatus: VehicleStatus;
}

export interface Form {
  summary: Partial<Summary>;
  steps: Step[];
  cancelReasons?: CancelReasons;
  additionalWorkComments?: string;
  groups?: GroupSummary[];
}
