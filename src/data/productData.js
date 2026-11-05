/**
 * Mock data for DINAVISA Paraguay product registration portal.
 * Prepared for future integration with Express API or Supabase.
 */

export const productData = {
  id: "MS-005566-01",
  badgeText: "MS",
  category: "PRODUCTO MEDICAMENTO DE SÍNTESIS QUÍMICA",
  registrationNumber: "MS-005566-01",
  company: "INDUFAR COMERCIAL E INDUSTRIAL SOCIEDAD ANONIMA",
  commercialName: "T.G. 15",
  genericName: "TIRZEPATIDA",
  expirationDate: "04-04-2030",
  status: "ACTIVO",
  issueDate: "04-04-2025",
  origin: "NACIONAL",
  pharmaceuticalForm: "SOLUCIÓN INYECTABLE EN PLUMA PRECARGADA / VIAL",
  dosage: "15 mg / 0.5 mL",
  atcCode: "A10BX16",
  prescriptionType: "VENTA BAJO RECETA ARCHIVADA",
  healthDirector: "Q.F. MARÍA ELENA CABALLERO - REG. PROF. N° 4512",
  address: "Calle Anahí e/ Zaavedra y Capitán Bado, Fernando de la Mora, Paraguay",
  documents: {
    prospecto: {
      title: "PROSPECTO DE INFORMACIÓN AL PACIENTE Y PROFESIONAL",
      version: "Ver. 2.1 (Aprobado DINAVISA Res. 418/2025)",
      sections: [
        {
          heading: "1. Denominación y Composición",
          content: "Cada vial monodosis contiene 15 mg de Tirzepatida en 0.5 mL de vehículo tamponado estéril. Excipientes: fosfato dibásico de sodio, cloruro de sodio, agua para inyectables c.s.p."
        },
        {
          heading: "2. Indicaciones Terapéuticas",
          content: "T.G. 15 está indicado como adyuvante a la dieta y el ejercicio para mejorar el control glucémico en adultos con diabetes mellitus tipo 2, y para el control crónico del peso en adultos con obesidad o sobrepeso con al menos una comorbilidad relacionada con el peso."
        },
        {
          heading: "3. Posología y Vía de Administración",
          content: "Vía subcutánea en abdomen, muslo o parte superior del brazo. La dosis inicial es de 2.5 mg una vez por semana durante 4 semanas, escalando progresivamente según prescripción médica hasta la dosis de mantenimiento recomendada de 15 mg una vez por semana."
        },
        {
          heading: "4. Contraindicaciones y Advertencias",
          content: "Hipersensibilidad conocida a la tirzepatida o a cualquiera de los excipientes. Antecedentes personales o familiares de carcinoma medular de tiroides (CMT) o síndrome de neoplasia endocrina múltiple tipo 2 (MEN 2)."
        },
        {
          heading: "5. Condiciones de Conservación",
          content: "Conservar en heladera entre 2°C y 8°C. No congelar. Proteger de la luz en su envase secundario original. Una vez abierto o a temperatura ambiente (máx. 30°C), utilizar en un plazo no mayor a 21 días."
        }
      ]
    },
    certificado: {
      certificateNumber: "CERT-DINAVISA-2025-005566",
      resolutionNumber: "Resolución D.N.V.S. N° 1248/2025",
      grantedDate: "04 de Abril de 2025",
      validUntil: "04 de Abril de 2030",
      officialSealText: "DIRECCIÓN NACIONAL DE VIGILANCIA SANITARIA - REPÚBLICA DEL PARAGUAY",
      legalBasis: "Ley N° 1119/97 de Productos de la Salud y Dispositivos Médicos",
      authorizedBy: "M.Sc. Farm. Jorge Daniel Iliou - Director Nacional DINAVISA",
      qrVerificationCode: "DINAVISA-PY-VERIFY-MS-005566-01-SEC-2025"
    },
    notificacion: {
      lastUpdated: "18 de Agosto de 2025",
      records: [
        {
          code: "NOTIF-POST-2025-089",
          date: "18-08-2025",
          type: "Actualización de Acondicionamiento Secundario",
          status: "APROBADA Y HOMOLOGADA",
          details: "Incorporación de código QR bidimensional de trazabilidad según Resolución DINAVISA N° 630/2024 en el estuche exterior."
        },
        {
          code: "NOTIF-POST-2025-034",
          date: "12-05-2025",
          type: "Cambio de Regente Farmacéutico Co-Responsable",
          status: "REGISTRADA",
          details: "Designación de Regente Farmacéutico Asistente Q.F. Carlos Benítez Bogado (Reg. Prof. 8923)."
        },
        {
          code: "REG-ORIG-2025-001",
          date: "04-04-2025",
          type: "Emisión Original de Registro Sanitario",
          status: "CONCEDIDO",
          details: "Aprobación de registro sanitario con validez quinquenal (5 años)."
        }
      ]
    }
  }
};

export const sampleProductsList = [
  productData,
  {
    id: "MS-001245-02",
    badgeText: "MS",
    category: "PRODUCTO MEDICAMENTO DE SÍNTESIS QUÍMICA",
    registrationNumber: "MS-001245-02",
    company: "LABORATORIOS LASCA - VICENTE SCAVONE & CIA S.A.E.",
    commercialName: "KITADOL 500",
    genericName: "PARACETAMOL",
    expirationDate: "15-11-2028",
    status: "ACTIVO",
    issueDate: "15-11-2023",
    origin: "NACIONAL",
    pharmaceuticalForm: "COMPRIMIDOS RECUBIERTOS",
    dosage: "500 mg",
    atcCode: "N02BE01",
    prescriptionType: "VENTA LIBRE",
    healthDirector: "Q.F. LAURA BOGADO - REG. PROF. N° 2390",
    address: "Ruta Mcal. Estigarribia Km 9.5, San Lorenzo, Paraguay",
    documents: {
      prospecto: {
        title: "PROSPECTO DE INFORMACIÓN AL PACIENTE",
        version: "Ver. 4.0 (Aprobado DINAVISA)",
        sections: [
          { heading: "Indicaciones", content: "Analgésico y antipirético para el alivio del dolor y la fiebre." },
          { heading: "Dosis", content: "1 comprimido cada 6 a 8 horas según necesidad clínica." }
        ]
      },
      certificado: {
        certificateNumber: "CERT-DINAVISA-2023-001245",
        resolutionNumber: "Resolución D.N.V.S. N° 4511/2023",
        grantedDate: "15 de Noviembre de 2023",
        validUntil: "15 de Noviembre de 2028",
        officialSealText: "DIRECCIÓN NACIONAL DE VIGILANCIA SANITARIA",
        legalBasis: "Ley N° 1119/97",
        authorizedBy: "M.Sc. Farm. Jorge Daniel Iliou",
        qrVerificationCode: "DINAVISA-PY-VERIFY-MS-001245-02"
      },
      notificacion: {
        lastUpdated: "10-02-2024",
        records: [
          {
            code: "NOTIF-POST-2024-012",
            date: "10-02-2024",
            type: "Actualización de Diseño de Empaque",
            status: "APROBADA",
            details: "Actualización gráfica de blister de aluminio grado médico."
          }
        ]
      }
    }
  },
  {
    id: "MB-008912-04",
    badgeText: "MB",
    category: "PRODUCTO MEDICAMENTO BIOLÓGICO",
    registrationNumber: "MB-008912-04",
    company: "FARMACEUTICA PARAGUAYA S.A. (FAPASA)",
    commercialName: "IMMUNO-G",
    genericName: "INMUNOGLOBULINA HUMANA NORMAL",
    expirationDate: "12-01-2024",
    status: "VENCIDO",
    issueDate: "12-01-2019",
    origin: "IMPORTADO",
    pharmaceuticalForm: "SOLUCIÓN PARA PERFUSIÓN INTRAVENOSA",
    dosage: "50 mg / mL (5 g en 100 mL)",
    atcCode: "J06BA02",
    prescriptionType: "USO EXCLUSIVO HOSPITALARIO",
    healthDirector: "Q.F. PATRICIA ALVARENGA - REG. PROF. N° 5109",
    address: "Avda. Primer Presidente N° 2390, Asunción, Paraguay",
    documents: {
      prospecto: {
        title: "PROSPECTO PARA USO HOSPITALARIO",
        version: "Ver. 1.8 (Registro Vencido - Archivo Histórico)",
        sections: [
          { heading: "Nota", content: "Registro en trámite de renovación sanitaria quinquenal." }
        ]
      },
      certificado: {
        certificateNumber: "CERT-DINAVISA-2019-008912",
        resolutionNumber: "Resolución D.N.V.S. N° 089/2019",
        grantedDate: "12 de Enero de 2019",
        validUntil: "12 de Enero de 2024",
        officialSealText: "DIRECCIÓN NACIONAL DE VIGILANCIA SANITARIA",
        legalBasis: "Ley N° 1119/97",
        authorizedBy: "Dirección Nacional DINAVISA",
        qrVerificationCode: "DINAVISA-PY-EXPIRED-MB-008912"
      },
      notificacion: {
        lastUpdated: "12-01-2024",
        records: [
          {
            code: "NOTIF-POST-2024-VENC",
            date: "12-01-2024",
            type: "Vencimiento de Periodo Quinquenal",
            status: "EXPIRADO - EN REEVALUACIÓN",
            details: "Trámite de renovación iniciado expediente N° 2024-55421."
          }
        ]
      }
    }
  }
];
