import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ProducerDetail {
	producerDetailScreenCancel = PcfButton('#ProducerDetail-ProducerDetailScreen-Cancel');
	producerDetailScreenEdit = PcfButton('#ProducerDetail-ProducerDetailScreen-Edit');
	producerDetailScreenProducerCodesLV = PcfListView('#ProducerDetail-ProducerDetailScreen-ProducerCodesLV');
	producerCodesLV_tbAdd = PcfButton('#ProducerDetail-ProducerDetailScreen-ProducerCodesLV_tb-Add');
	producerCodesLV_tbRemove = PcfButton('#ProducerDetail-ProducerDetailScreen-ProducerCodesLV_tb-Remove');
	accountRepSelectAccountRep = PcfButton('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-AccountRep-SelectAccountRep');
	producerDetailDVAddress = PcfTextInput('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-Address');
	producerDetailDVAdvanceBalance = PcfTextInput('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-AdvanceBalance');
	producerDetailDVAgencyBillPlan = PcfButton('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-AgencyBillPlan');
	producerDetailDVCommissionDayOfMonth = PcfTextInput('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-CommissionDayOfMonth');
	producerDetailDVCommissionExpense = PcfTextInput('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-CommissionExpense');
	producerDetailDVCommissionPaidYearToDate = PcfTextInput('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-CommissionPaidYearToDate');
	producerDetailDVCommissionPayable = PcfTextInput('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-CommissionPayable');
	producerDetailDVCommissionReserve = PcfTextInput('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-CommissionReserve');
	producerDetailDVCurrency = PcfSelectInput('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-Currency');
	producerDetailProducerDetailScreenProducerDetailDVDefaultPaymentInstrumentCreateNewPaymentInstrument = PcfButton('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-DefaultPaymentInstrument-CreateNewPaymentInstrument');
	producerDetailDVEmail = PcfTextInput('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-Email');
	producerHoldStatementInputSetHoldStatement = PcfComponent('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-HoldStatementInputSet-ProducerHoldStatementInputSet-HoldStatement');
	producerHoldStatementInputSetStatementHoldNegativeLimit = PcfTextInput('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-HoldStatementInputSet-ProducerHoldStatementInputSet-StatementHoldNegativeLimit');
	producerHoldStatementInputSetStatementHoldPositiveLimit = PcfTextInput('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-HoldStatementInputSet-ProducerHoldStatementInputSet-StatementHoldPositiveLimit');
	producerDetailDVName = PcfTextInput('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-Name');
	producerDetailDVPeriodicity = PcfSelectInput('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-Periodicity');
	producerDetailDVPhone = PcfTextInput('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-Phone');
	producerDetailDVPrimaryContact = PcfTextInput('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-PrimaryContact');
	producerDetailDVSecurityZone = PcfButton('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-SecurityZone');
	producerDetailDVSuspenseAmount = PcfTextInput('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-SuspenseAmount');
	producerDetailDVTier = PcfSelectInput('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-Tier');
	producerDetailDVUnappliedAmount = PcfTextInput('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-UnappliedAmount');
	producerDetailDVWriteoffExpense = PcfTextInput('#ProducerDetail-ProducerDetailScreen-ProducerDetailDV-WriteoffExpense');
	producerDetailScreenProducerDetail_ArchiveWarningAlertBar = PcfButton('#ProducerDetail-ProducerDetailScreen-ProducerDetail_ArchiveWarningAlertBar');
	producerDetail_ArchiveWarningAlertBarCloseBtn = PcfButton('#ProducerDetail-ProducerDetailScreen-ProducerDetail_ArchiveWarningAlertBar-CloseBtn');
	producerDetailScreenProducerDetail_TroubleTicketAlertAlertBar = PcfButton('#ProducerDetail-ProducerDetailScreen-ProducerDetail_TroubleTicketAlertAlertBar');
	producerDetail_TroubleTicketAlertAlertBarCloseBtn = PcfButton('#ProducerDetail-ProducerDetailScreen-ProducerDetail_TroubleTicketAlertAlertBar-CloseBtn');
	producerDetailScreenUpdate = PcfButton('#ProducerDetail-ProducerDetailScreen-Update');
	producerDetailScreen_msgs = PcfButton('#ProducerDetail-ProducerDetailScreen-_msgs');
	producerDetailProducerDetail_UpLink = PcfButton('#ProducerDetail-ProducerDetail_UpLink');
	producerDetail_Paging = PcfButton('#ProducerDetail-_Paging');
	producerDetail__crumb__ = PcfComponent('#ProducerDetail-__crumb__');
}