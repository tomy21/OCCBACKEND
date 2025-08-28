-- CreateEnum
CREATE TYPE "statusIssue" AS ENUM ('new', 'progress', 'solved');

-- CreateEnum
CREATE TYPE "RecordStatus" AS ENUM ('0', '1', '2');

-- CreateTable
CREATE TABLE "OccCategory" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "modifyBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "OccCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OccDescription" (
    "id" SERIAL NOT NULL,
    "id_category" INTEGER NOT NULL,
    "object" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "createdBy" TEXT NOT NULL,
    "modifyBy" TEXT,

    CONSTRAINT "OccDescription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OccIssue" (
    "id" SERIAL NOT NULL,
    "ticket" TEXT NOT NULL,
    "category" TEXT,
    "lokasi" TEXT,
    "description" TEXT,
    "gate" TEXT,
    "action" TEXT,
    "foto_in" TEXT,
    "foto_out" TEXT,
    "number_plate" TEXT,
    "TrxNo" TEXT,
    "solusi" TEXT,
    "duration" TEXT,
    "status" "statusIssue" NOT NULL DEFAULT 'new',
    "createdBy" TEXT NOT NULL,
    "modifiedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "OccIssue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OccRefLocation" (
    "id" SERIAL NOT NULL,
    "Code" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Region" TEXT,
    "TID" TEXT,
    "Vendor" TEXT,
    "VendorParkingCode" TEXT,
    "ShortName" TEXT,
    "Address" TEXT,
    "StartTime" TIMESTAMP(3),
    "EndTime" TIMESTAMP(3),
    "DateNext" INTEGER,
    "TimeZone" TEXT,
    "UrlServer" TEXT,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,
    "DeletedAt" TIMESTAMP(3),
    "recordStatus" "RecordStatus" NOT NULL,

    CONSTRAINT "OccRefLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OccTransaction" (
    "Id" SERIAL NOT NULL,
    "PlateNumberIn" TEXT NOT NULL,
    "PlateNumberOut" TEXT,
    "PathIn" TEXT NOT NULL,
    "PathOut" TEXT,
    "Location" TEXT,
    "GateName" TEXT,
    "InTime" TIMESTAMP(3),
    "OutTime" TIMESTAMP(3),
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OccTransaction_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "OccGate" (
    "id" SERIAL NOT NULL,
    "id_location" INTEGER NOT NULL,
    "gate" TEXT NOT NULL,
    "channel_cctv" TEXT NOT NULL,
    "arduino" INTEGER NOT NULL DEFAULT 0,
    "statusGate" INTEGER NOT NULL DEFAULT 0,
    "id_tele" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "OccGate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OccIntercome" (
    "Id" SERIAL NOT NULL,
    "GateName" TEXT NOT NULL,
    "Locations" TEXT NOT NULL,
    "CountInCall" INTEGER,
    "CountMissCall" INTEGER,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OccIntercome_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "RefIssuer" (
    "id" SERIAL NOT NULL,
    "issuerId" TEXT,
    "issuerName" TEXT,
    "IssuerLongName" TEXT,
    "Color" TEXT,
    "LogoUrl" TEXT,
    "SettlementPath" TEXT,
    "SettlementExtensionFile" TEXT,
    "FlagRecon" TEXT,
    "CreatedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "CreatedBy" TEXT,
    "UpdatedOn" TIMESTAMP(3) NOT NULL,
    "UpdatedBy" TIMESTAMP(3),
    "DeletedOn" TEXT,
    "DeletedBy" TEXT,
    "RecordStatus" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "RefIssuer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OccListMemberStyles" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT,
    "PlateNumber" TEXT,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OccListMemberStyles_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "CounterGate" (
    "Id" SERIAL NOT NULL,
    "Date" TEXT,
    "LocationCode" TEXT NOT NULL,
    "LocationName" TEXT,
    "CodeGate" TEXT,
    "CountInMotor" INTEGER DEFAULT 0,
    "CountOutMotor" INTEGER DEFAULT 0,
    "CountInMobil" INTEGER DEFAULT 0,
    "CountOutMobil" INTEGER DEFAULT 0,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CounterGate_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "userEventNobu" (
    "id" SERIAL NOT NULL,
    "nik" TEXT NOT NULL,
    "event" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userEventNobu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OccRefLocation_Code_key" ON "OccRefLocation"("Code");

-- CreateIndex
CREATE UNIQUE INDEX "userEventNobu_nik_key" ON "userEventNobu"("nik");

-- AddForeignKey
ALTER TABLE "OccDescription" ADD CONSTRAINT "OccDescription_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "OccCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OccGate" ADD CONSTRAINT "OccGate_id_location_fkey" FOREIGN KEY ("id_location") REFERENCES "OccRefLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CounterGate" ADD CONSTRAINT "CounterGate_LocationCode_fkey" FOREIGN KEY ("LocationCode") REFERENCES "OccRefLocation"("Code") ON DELETE RESTRICT ON UPDATE CASCADE;
