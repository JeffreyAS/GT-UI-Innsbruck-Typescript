import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class AccountDetailDocuments {
	documentSearchDVAuthorCriterion = PcfTextInput('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentSearchDV-AuthorCriterion');
	dateSearchCriteriaDateSearchCriteriaChosenOption = PcfSelectInput('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentSearchDV-DateSearchCriteria-DateSearchCriteriaChosenOption');
	dateSearchCriteriaDateSearchCriteriaDirectChoice_Choice = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentSearchDV-DateSearchCriteria-DateSearchCriteriaDirectChoice_Choice');
	dateSearchCriteriaDateSearchCriteriaEndDate = PcfDateValueInput('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentSearchDV-DateSearchCriteria-DateSearchCriteriaEndDate');
	dateSearchCriteriaDateSearchCriteriaRangeChoice_Choice = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentSearchDV-DateSearchCriteria-DateSearchCriteriaRangeChoice_Choice');
	dateSearchCriteriaDateSearchCriteriaRangeValue = PcfSelectInput('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentSearchDV-DateSearchCriteria-DateSearchCriteriaRangeValue');
	dateSearchCriteriaDateSearchCriteriaStartDate = PcfDateValueInput('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentSearchDV-DateSearchCriteria-DateSearchCriteriaStartDate');
	documentSearchDVIncludeObsoletes = PcfComponent('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentSearchDV-IncludeObsoletes');
	documentSearchDVLanguage = PcfSelectInput('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentSearchDV-Language');
	accountDetailDocumentsAccountDetailDocumentsScreenDocumentSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	accountDetailDocumentsAccountDetailDocumentsScreenDocumentSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	documentSearchDVStatusCriterion = PcfSelectInput('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentSearchDV-StatusCriterion');
	documentSearchDVTypeCriterion = PcfSelectInput('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentSearchDV-TypeCriterion');
	accountDetailDocumentsScreenDocumentStoreSuspendedWarning = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentStoreSuspendedWarning');
	documentStoreSuspendedWarningCloseBtn = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentStoreSuspendedWarning-CloseBtn');
	accountDetailDocumentsScreenDocumentsLV = PcfListView('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentsLV');
	documentsLV_tbAccountDocuments_DeobsolesceButton = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentsLV_tb-AccountDocuments_DeobsolesceButton');
	documentsLV_tbAccountDocuments_ObsolesceButton = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentsLV_tb-AccountDocuments_ObsolesceButton');
	documentsLV_tbAddDocuments = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentsLV_tb-AddDocuments');
	addDocumentsNewDocumentMenuItemSet = PcfComponent('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentsLV_tb-AddDocuments-NewDocumentMenuItemSet');
	newDocumentMenuItemSetNewDocumentByUpload = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentsLV_tb-AddDocuments-NewDocumentMenuItemSet-NewDocumentByUpload');
	newDocumentMenuItemSetNewDocumentFromTemplate = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentsLV_tb-AddDocuments-NewDocumentMenuItemSet-NewDocumentFromTemplate');
	documentsLV_tbRefreshAsyncContent = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentsLV_tb-RefreshAsyncContent');
	documentsLV_tbRemoveDocuments = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-DocumentsLV_tb-RemoveDocuments');
	accountDetailDocumentsScreenIDCSDisabledAlert = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-IDCSDisabledAlert');
	iDCSDisabledAlertCloseBtn = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-IDCSDisabledAlert-CloseBtn');
	accountDetailDocumentsScreenIDCSUnavailableAlert = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-IDCSUnavailableAlert');
	iDCSUnavailableAlertCloseBtn = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-IDCSUnavailableAlert-CloseBtn');
	accountDetailDocumentsScreenIDMSUnavailableAlert = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-IDMSUnavailableAlert');
	iDMSUnavailableAlertCloseBtn = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-IDMSUnavailableAlert-CloseBtn');
	accountDetailDocumentsScreen_msgs = PcfButton('#AccountDetailDocuments-AccountDetailDocumentsScreen-_msgs');
	accountDetailDocumentsAccountDetailDocuments_UpLink = PcfButton('#AccountDetailDocuments-AccountDetailDocuments_UpLink');
	accountDetailDocuments_Paging = PcfButton('#AccountDetailDocuments-_Paging');
	accountDetailDocuments__crumb__ = PcfComponent('#AccountDetailDocuments-__crumb__');
}
